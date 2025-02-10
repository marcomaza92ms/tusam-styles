export const Navbar = () => {
  const navbarUrls = [
    { path: "/", label: "Homepage" },
    { path: "/css-props", label: "CSS Properties" },
    { path: "/typed-om", label: "Typed OM" },
    { path: "/paint-api", label: "Paint API" },
    { path: "/layout-api", label: "Layout API" },
  ];
  return (
    <nav className="w-full flex flex-row justify-center items-center my-4">
      <ul className="flex flex-row gap-4">
        {navbarUrls.map((url, index) => (
          <li key={index}>
            <a href={url.path}>{url.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
