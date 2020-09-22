import { Model } from '@vuex-orm/core'
import Post from './Post'

export default class User extends Model {
  static entity = "users"

  static fields() {
    return {
      ID: this.attr(null),
      user_login: this.attr(""),
      user_nicename: this.attr(""),
      user_email: this.attr(""),
      display_name: this.attr(""),
      posts: this.hasMany(Post, 'user_ID')
    }
  }
}
