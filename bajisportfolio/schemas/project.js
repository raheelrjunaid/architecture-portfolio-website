export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "isArtwork",
      title: "Is Artwork",
      description: "Is this conceptual work or artwork?",
      type: "boolean",
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      description: "This can be used to order projects in the list",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],

  initialValue: {
    isArtwork: false,
  },

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
