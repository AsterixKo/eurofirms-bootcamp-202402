import { User, Post } from '../data/index.js';
import validate from './validate.js';
import errors from './errors.js';

const { SystemError, MatchError } = errors;

function removePost(userId, postId) {
  // TODO input validation

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

      return Post.deleteOne({ _id: post._id }).catch((error) => {
        throw new SystemError(error.message);
      });
    })
    .then((result) => {});
}

export default removePost;