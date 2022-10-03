import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { saveContact, listContact, detailContact, deleteContact } from "./contact.js";

yargs(hideBin(process.argv))
  .command({
    command: "add",
    describe: "Add new Contact",
    builder: {
      name: {
        alias: "n",
        describe: "Name",
        demandOption: true,
        type: "string",
      },
      email: {
        alias: "e",
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        alias: "o",
        describe: "Number Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      saveContact(argv.name, argv.email, argv.noHp);
    },
  })
  .command({
    command: "list",
    describe: "Show list contact",
    handler: () => {
      listContact();
    },
  })
  .command({
    command: "detail",
    describe: "Display contact details by name",
    builder: {
      name: {
        alias: "n",
        describe: "Name",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      detailContact(argv.name);
    },
  })
  .command({
    command: "delete",
    describe: "Delete contacts by name",
    builder: {
      name: {
        alias: "n",
        describe: "Name",
        demandOption: true,
        type: "string",
      },
    },
    handler: (argv) => {
      deleteContact(argv.name);
    },
  })
  .demandCommand()
  .parse();


