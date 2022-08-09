export default {
  name: "siteconfig",
  type: "document",
  title: "Site Settings",
  __experimental_actions: [/* "create", "delete", */ "update", "publish"],
  fields: [
    {
      name: "artImage",
      title: "Artwork Image",
      type: "image",
    },
    {
      name: "workImage",
      title: "Work Image",
      type: "image",
    },
    {
      name: "aboutImage",
      title: "About Image",
      type: "image",
    },
  ],
};
