import React, { Component, use } from 'react'

export default class Member extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                id: 1,
                name: 'Đàm Luận',
                age: 20,
            },
            mang: []
        }
    }
    changeName = () => {
        this.setState({
            user: { ...this.state.user, name: 'DevMaster' }
            // user: { name: 'DevMaster' }
        })
    }
    render() {
        return (
            <div className='text-center'>
                <h2>Thông tin sinh viên</h2>
                <p>Mã sinh viên: {this.state.user.id}</p>
                <p>Tên sinh viên: {this.state.user.name}</p>
                <p>Tuổi: {this.state.user.age}</p>
                <button onClick={this.changeName}>Thay đổi</button>
            </div>
        )
    }
}
