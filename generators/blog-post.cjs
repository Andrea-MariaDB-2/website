const fs = require("fs");

module.exports = (plop) => {
  return {
    description: "Generate a new blog post.",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "What's the title?",
      },
      {
        type: "input",
        name: "excerpt",
        message:
          "What's the excerpt? (i.e. a one paragraph summary of the post)",
      },
      {
        type: "input",
        name: "publishDate",
        message:
          "What's the publication date (format: Friday, 4 Feb 2022 11:00:00 UTC)?",
      },
      {
        type: "input",
        name: "author",
        message:
          "Who is/are the author(s)? (please use their GitHub username. Comma-separated list for multiple authors.)",
        validate: function (input) {
          const existingAuthorsFile = fs
            .readFileSync("./src/lib/contents/authors.ts")
            .toString();
          const missingAuthors = input
            .split(",")
            .filter((author) => !existingAuthorsFile.includes(author.trim()));
          return missingAuthors.length === 0
            ? true
            : `Please add the missing authors ${missingAuthors.join(
                ","
              )} to ./src/lib/contents/authors, then press Enter.`;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "../src/routes/blog/{{dashCase title}}.md",
        templateFile: "./templates/blog-post/slug.md.hbs",
      },
      {
        type: "add",
        path: "../static/images/blog/{{dashCase title}}/teaser.png",
        templateFile: "./templates/blog-post/teaser.png",
      },
      "That's it. Please write your blog post in the newly created file in ./src/routes/blog and update the placeholder teaser image in ./static/images/blog.",
    ],
  };
};
