registerLayout(
  "centering",
  class {
    async intrinsicSizes() {
      return [[200, 200]];
    }

    async layout(children, edges, constraints, styleMap) {
      const availableInlineSize = constraints.fixedInlineSize - edges.inline;
      const availableBlockSize = constraints.fixedBlockSize
        ? constraints.fixedBlockSize - edges.block
        : null;

      let maxChildBlockSize = 0;

      const childFragments = [];
      for (let child of children) {
        const fragment = await child.layoutNextFragment({
          availableInlineSize,
          availableBlockSize,
        });

        maxChildBlockSize = Math.max(maxChildBlockSize, fragment.blockSize);

        fragment.inlineOffset =
          edges.inlineStart +
          (constraints.fixedInlineSize - fragment.inlineSize) / 2;
        fragment.blockOffset =
          edges.blockStart +
          Math.max(0, (constraints.fixedBlockSize - fragment.blockSize) / 2);

        childFragments.push(fragment);
      }

      const autoBlockSize = maxChildBlockSize + edges.block;

      return {
        autoBlockSize,
        childFragments,
      };
    }
  }
);
