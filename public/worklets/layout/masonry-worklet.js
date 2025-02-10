// eslint-disable-next-line no-undef
registerLayout(
  "masonry",
  class {
    static get inputProperties() {
      return ["--gap", "--columns"];
    }

    async intrinsicSizes() {}
    async layout(children, edges, constraints, styleMap) {
      const inlineSize = constraints.fixedInlineSize;

      const gap = parseInt(styleMap.get("--gap").toString());
      const columnValue = styleMap.get("--columns").toString();

      let columns = parseInt(columnValue);
      if (columnValue == "auto" || !columns) {
        columns = Math.ceil(inlineSize / 350);
      }

      const childInlineSize = (inlineSize - (columns + 1) * gap) / columns;
      const childFragments = await Promise.all(
        children.map((child) => {
          return child.layoutNextFragment({ fixedInlineSize: childInlineSize });
        })
      );

      let autoBlockSize = 0;
      const columnOffsets = Array(columns).fill(0);
      for (let childFragment of childFragments) {
        const min = columnOffsets.reduce(
          (acc, val, idx) => {
            if (!acc || val < acc.val) {
              return { idx, val };
            }

            return acc;
          },
          { val: +Infinity, idx: -1 }
        );

        childFragment.inlineOffset = gap + (childInlineSize + gap) * min.idx;
        childFragment.blockOffset = gap + min.val;

        columnOffsets[min.idx] =
          childFragment.blockOffset + childFragment.blockSize;
        autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + gap);
      }

      return { autoBlockSize, childFragments };
    }
  }
);
