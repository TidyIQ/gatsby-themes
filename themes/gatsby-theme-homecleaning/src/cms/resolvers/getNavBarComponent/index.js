const getNavBarComponent = {
  Query: {
    getNavBarComponent: {
      type: "NavBarComponent",
      resolve(source, args, context) {
        const navBarYaml = context.nodeModel.getAllNodes({
          type: "NavBarYaml"
        })[0];

        const navArray = [];
        for (let i = 0; i < navBarYaml.navArray.length; i += 1) {
          let href = "";
          switch (navBarYaml.navArray[i].page) {
            case "home":
              href = "/";
              break;
            case "about":
              href = "/about";
              break;
            case "contact":
              href = "/contact";
              break;
            case "faq":
              href = "/faq";
              break;
            case "pricing":
              href = "/pricing";
              break;
            case "reviews":
              href = "/reviews";
              break;
            case "services":
              href = "/services";
              break;
            default:
              href = "/";
              break;
          }
          navArray.push({ href, label: navBarYaml.navArray[i].label });
        }

        return { navArray };
      }
    }
  }
};

export default getNavBarComponent;
