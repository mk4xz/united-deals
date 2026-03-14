import BreadcrumbTrail from "../shared/breadcrumb-trail";

function NavLinksProduct() {
  return (
    <BreadcrumbTrail
      items={[
        { label: "Home", to: "/" },
        { label: "Shop", to: "/categories" },
        { label: "Shop Grid", to: "/categories" },
        { label: "Electronics Devices", to: "/categories" },
        { label: "Macbook Pro" },
      ]}
    />
  );
}

export default NavLinksProduct;
