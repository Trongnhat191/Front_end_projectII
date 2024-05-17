import { divide } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';


class HomeHeader extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='home-header-container'>
                    <div className='home-header-content'>
                        <div className='left-content'>
                            <i class='fas fa-bars'></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content'>
                            <div className='child-content'>
                                <div><b>Chuyên Khoa</b></div>
                                <div className='sub-title'>Tìm bác sỹ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Cơ sở y tế</b></div>
                                <div className='sub-title'>chọn bệnh viện phòng khám</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Bác sỹ</b></div>
                                <div className='sub-title'>Chọn bác sỹ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div><b>Gói khám</b></div>
                                <div className='sub-title'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content'>
                            <div className='support'> <i className='fas fa-question-circle'></i> Hỗ trợ</div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='content-up'>
                        <div className='title1'>DỊCH VỤ SÂN BÓNG</div>
                        <div className='title2'>MỌI THỨ BẠN CẦN ĐỂ THỎA MÃN ĐAM MÊ TÚC CẦU</div>
                        <div className='search'>
                            <i className='fas fa-search'></i>
                            <input type='text' placeholder='Tìm kiếm ' />
                        </div>
                    </div>
                    <div className='content-down'>
                        <div className='options'>
                            

                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Kham chuyen khoa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i class='far fa-hospital'></i></div>
                                <div className='text-child'>Kham tu xa</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Kham tong quat</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='fas fa-flask'></i></div>
                                <div className='text-child'>Xet nghiem y hoc</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Suc khoe tinh than</div>
                            </div>
                            <div className='option-child'>
                                <div className='icon-child'><i className='far fa-hospital'></i></div>
                                <div className='text-child'>Kham nha khoa</div>
                            </div>
                        </div>

                    </div>
                </div>
            </React.Fragment >
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
