/**
 * 尾部代码
 * 使用jsx方式开发
 * 对外暴露一个对象，render方法中是template
 */
import '../styles/footer.styl'

export default {
  data() {
    return {
      author: 'linkzz'
    }
  },
  render() {
    return (
      <div id="footer">
        <span>Witten by {this.author}</span>
      </div>
    )
  }
}