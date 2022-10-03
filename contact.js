import fs from "fs";
import chalk from "chalk";
import validator from "validator";

// Membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// Membuat file contact JSON
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

// function load contact
const loadContact = () => {
  // Read file synchronous
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  return contacts;
};

// function add contact
export const saveContact = (name, email, noHp) => {
  const contact = { name, email, noHp };
  const contacts = loadContact();
  // Check duplicate name
  const duplicate = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );
  
  if (duplicate) {
    console.log(chalk.bgYellow.bold("   The contact name has been registered!   "));
    return false;
  }

  // Check validation email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.bgRed.bold("   Email address entered is wrong!   "));
      return false;
    }
  }
  // Check validation Number Phone from Region Indonesian
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.bgRed.bold("   The mobile number you entered is invalid!   "));
    return false;
  }

  contacts.push(contact);

  try {
    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  } catch (error) {
    console.log(error);
  }

  console.log(chalk.bgGreen.bold("   Thank you for entering the data   "));
};

// function load list contact
export const listContact = () => {
  const contacts = loadContact();

  if (contacts.length <= 0) {
    console.log(chalk.bgRed.bold("   Contact Data Still Empty   "))
    return false;
  }

  console.log(
    chalk.bgBlueBright.bold(" Daftar Kontak ") +
      "\n" +
      chalk.underline.bold("No") +
      "\t" +
      chalk.underline.bold("Nama") +
      "\t\t\t" +
      chalk.underline.bold("Phone Number")
  );
  contacts.forEach((contact, i) => {
    console.log(
      `${i + 1}.\t${
        contact.name.length > 7
          ? contact.name.substr(0, 5) + ".."
          : contact.name
      }\t\t\t${contact.noHp}`
    );
  });
};

// function load detail contact
export const detailContact = (name) => {
  const contacts = loadContact();
  const matches = contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());

  if (!matches) {
    console.log(
      chalk.bgRed.bold(
        `   The name (${name}) on the contact list does not exist   `
      )
    );
    return false;
  }

  console.log(chalk.bold(`---Details Contact `));
  console.log(chalk.cyan.inverse.bold(" Name \t\t") + `: ${matches.name}`);
  console.log(chalk.cyan.inverse.bold(" Number Phone \t") + `: ${matches.noHp}`);
  console.log(chalk.cyan.inverse.bold(" Email \t\t") + `: ${matches.email}`);
};

// function delete contact
export const deleteContact = (name) => {
  const contacts = loadContact();

  const newContacts = contacts.filter((contact) => contact.name.toLowerCase() !== name.toLowerCase());

  if (contacts.length === newContacts.length) {
    console.log(chalk.bgRed.bold(`   The name (${name}) on the contact list does not exist   `));
    return false;
  }

  try {
    fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));
  } catch (error) {
    console.log(error);
  }

  console.log(chalk.bgGreen.bold(`   Contact ${name} successfully deleted!   `));
};

export default { listContact, saveContact, detailContact, deleteContact };
