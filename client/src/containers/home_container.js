import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getBooks } from '../actions';
import BookItem from '../widgetsUI/book_item';

class HomeContainer extends Component {

  componentWillMount(){
    this.props.dispatch(getBooks(2,0,'desc'))
  }

  renderItems = (books) => (
    books.list ?
      books.list.map((book) => {
        return (
          <BookItem {...book} key={book._id}/>
        )
      })
    :null
  )

  loadmore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(getBooks(1,count,'desc',this.props.books.list))
  }

  render() {
    return (
      <div>
        {this.renderItems(this.props.books)}
        <div 
          className="loadmore"
          onClick={this.loadmore}
        >Load More</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //books same name as reducer
    books: state.books
  }
}

export default connect(mapStateToProps)(HomeContainer);