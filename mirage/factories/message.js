import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  senderEmail() { return faker.internet.email(); },
  senderName() { return `${faker.name.firstName()} ${faker.name.lastName()}`; },
  subject() { return faker.lorem.sentence(); },
  body() { return faker.lorem.paragraphs(); },
});
