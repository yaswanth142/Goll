import Item from "./Item";
import { GOL, Company, About, Contact_Us } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 lg:ml-64">
      <Item Links={GOL} title="PRODUCTS" />
      <Item Links={Company} title="RESOURCES" />
      <Item Links={About} title="COMPANY" />
      <Item Links={Contact_Us} title="SUPPORT" />
    </div>
  );
};

export default ItemsContainer;
