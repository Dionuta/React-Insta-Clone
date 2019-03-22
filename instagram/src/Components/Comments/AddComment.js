import React from 'react';




class Addcomment extends React.Component {

    state = {
        value: ''
    }

    handelChange = event => this.setState({ value: event.target.value });

    handelSubmit = (event) => {
        event.preventDefault();
        this.props.addComment(this.state.value)
        this.setState({ value: '' })
    }

    render() {
        return (
            <form className='addComments' onSubmit={this.handelSubmit}>
                <input
                    type='text'
                    placeholder='Add a Comment...'
                    onChange={this.handelChange}
                    value={this.state.value}
                />
            </form>
        )
    }
}


export default Addcomment;