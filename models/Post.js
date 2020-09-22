import { Model } from '@vuex-orm/core'
import User from './User'

export default class Post extends Model {
  static entity = 'posts'

  static fields () {
    return {
      ID: this.uid(),
      post_author: this.number(0),
      post_title: this.string(''),
      post_type: this.string(''),
      assignee: this.belongsTo(User, 'post_author')
    }
  }

  static fetch() {
    this.api().get('/posts')
  }
}
