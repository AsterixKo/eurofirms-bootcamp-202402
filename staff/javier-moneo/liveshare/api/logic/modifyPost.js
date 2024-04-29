import { User, Post } from '../data/index.js';
import validate from './validate.js';
import errors from './errors.js';

const { SystemError, MatchError } = errors;

function modifyPost(userId, postId, text) {
  validate.text(text);

  return User.findById(userId)
    .catch((error) => {
      throw new SystemError(error.message);
    })
    .then((user) => {
      if (!user) throw new MatchError('user not found');

      return Post.findById(postId).catch((error) => {
        throw new SystemError(error.message);
      });
    })
    .then((post) => {
      if (!post) throw new MatchError('post not found');

      if (post.author.toString() !== userId)
        throw new MatchError('post does not belong user');

      post.text = text;

      return post.save();
    })
    .then((result) => {});
}

export default modifyPost;