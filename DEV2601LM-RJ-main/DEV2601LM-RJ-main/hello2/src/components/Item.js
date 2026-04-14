import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <>
                <div className='text-center'>
                    <h2>Thông tin sinh viên</h2>
                    <p>Mã sinh viên: {this.props.nguoidung.id}</p>
                    <p>Tên sinh viên: {this.props.nguoidung.name}</p>
                    <p>Tuổi: {this.props.nguoidung.age}</p>
                </div>
            </>
        )
    }
}
