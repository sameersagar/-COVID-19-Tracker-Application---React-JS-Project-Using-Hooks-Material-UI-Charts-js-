import React, { Component } from 'react'
import Particles from 'react-particles-js';

export default class particles extends Component {
    render() {
        return (
            <div>
                <Particles
                    params={{
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }} />

            </div>
        )
    }
}
