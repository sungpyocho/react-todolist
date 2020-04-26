import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
    state = {
        time: new Date()
    }
    
    zeroPadding(num, digit) {
        return Array(Math.max(digit - String(num).length + 1, 0)).join(0) + num;
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        // 컴포넌트가 화면에서 사라진 후에도 1초마다 실행되지 않도록 해제
        clearInterval(this.timerID);
    }

    tick() {
        // 실행될 때마다 state가 업데이트됨! -> 재랜더링!
        this.setState({
            time: new Date()
        });
    }


    render() {
        const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
        const { time } = this.state;

        return(
            <div className="Clock-body">
                <p className="Clock-date">
                    {time.getFullYear()}
                    &nbsp;- {this.zeroPadding(time.getMonth() + 1, 2)}
                    &nbsp;- {this.zeroPadding(time.getDate(), 2)}
                    &nbsp; {weekdays[time.getDay()]}

                </p>
                <p className="Clock-time">
                    {this.zeroPadding(time.getHours(), 2)} 
                    &nbsp;: {this.zeroPadding(time.getMinutes(), 2)}
                    &nbsp;: {this.zeroPadding(time.getSeconds(), 2)}
                </p>
            </div>
        );
    }
}

export default Clock;