import _ from 'lodash';
import Faker from 'faker';

export default {
  user(props = {}) {
    return {
      avatar: Faker.internet.avatar(),
      joined: Faker.date.past(),
      username: Faker.internet.userName(),
      ...props,
    };
  },
  post(props = {}) {
    return {
      _id: _.uniqueId('post-'),
      votes: Faker.random.number(),
      title: Faker.lorem.sentence(),
      image: Faker.random.image(),
      author: {},
      createdAt: Faker.date.recent(),
      description: Faker.lorem.paragraphs(),
      ...props,
    };
  },
};
