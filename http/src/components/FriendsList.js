import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFriends, addFriend } from '../actions';
import axios from 'axios';

class FriendsList extends Component {
	constructor() {
		super();
		this.state = {
			newFriend: ''	
		};
	}
    componentDidMount() {
		this.props.getFriends();
	}
	submitter = (event) => {
		event.preventDefault();
		this.props.addFriend({name:this.state.newFriend, age:'placeholderAge', email:'placeholderEmail'});
	}
	handleName = (event) => {
		this.setState({
			newFriend: event.target.value
		});
		
	}

    render() {
        return (
            <div>
                <ul>
                    {this.props.friends.map((friend, i) => {
                        return (
                            <li key={i}>
                                <p>{`Friend ${i+1}`}</p>
                                <p>{`Name: ${friend.name}`}</p>
                                <p>{`Age: ${friend.age}`}</p>
                                <p>{`Email: ${friend.email}`}</p>
                            </li>
                        );
                    })}
                </ul>
                <form onSubmit={this.submitter}>
					<input type="text" onChange={this.handleName} placeholder='Add a new friend!' value={this.state.newFriend}/>			
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friends
    };
};

export default connect(mapStateToProps, { getFriends, addFriend })(FriendsList);