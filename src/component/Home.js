import React, { Component } from 'react'
import CustomButton from './../atoms/CustomButton';
import { APIs } from './../constant';
import axios from 'axios'
import './Home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedYear: "",
            isSuccessfulLaunch: "",
            isSuccessfullLand: "",
            flightData: [],
            loader: true
        }
        this.missionYearUI = this.missionYearUI.bind(this);
        this.successfulLaunchUI = this.successfulLaunchUI.bind(this);
        this.successfulLaunchUI = this.successfulLaunchUI.bind(this);
        this.filterFunction = this.filterFunction.bind(this);
        this.cardUI = this.cardUI.bind(this);

    }
    componentDidMount() {
        let data = axios.get(APIs.all);
        data.then(res => {
            this.setState({ flightData: res.data, api: APIs.all, loader: false })
        })
    }
    filterFunction(year, successfullLaunching, successfullLanding) {
        let url = APIs.all;
        let yearFilter = "";
        let landingFilter = "";
        let launchingFilter = "";
        this.setState({ loader: true });
        if (year) {
            yearFilter = '&launch_year=' + year;
            if (this.state.isSuccessfulLaunch)
                launchingFilter = '&launch_success=' + this.state.isSuccessfulLaunch
            if (this.state.isSuccessfullLand)
                landingFilter = '&land_success=' + this.state.isSuccessfullLand
            if (this.state.selectedYear === year) {
                year = "";
                yearFilter = "";
            }
            url = url + launchingFilter + landingFilter + yearFilter;
            let data = axios.get(url);
            data.then(res => {
                this.setState({ flightData: res.data, loader: false, selectedYear: year })
            })
        }
        else if (successfullLaunching) {
            launchingFilter = '&launch_success=' + successfullLaunching;
            if (this.state.selectedYear)
                yearFilter = '&launch_year=' + this.state.selectedYear;
            if (this.state.isSuccessfullLand)
                landingFilter = '&land_success=' + this.state.isSuccessfullLand;
            if (this.state.isSuccessfulLaunch === successfullLaunching) {
                launchingFilter = "";
                successfullLaunching = "";
            }
            url = url + launchingFilter + landingFilter + yearFilter;
            let data = axios.get(url);
            data.then(res => {
                this.setState({ flightData: res.data, loader: false, isSuccessfulLaunch: successfullLaunching })
            })
        } else {
            landingFilter = '&land_success=' + successfullLanding;
            if (this.state.selectedYear)
                yearFilter = '&launch_year=' + this.state.selectedYear;
            if (this.state.isSuccessfulLaunch)
                launchingFilter = '&launch_success=' + this.state.isSuccessfulLaunch
            if (this.state.isSuccessfullLand === successfullLanding) {
                landingFilter = "";
                successfullLanding = "";
            }
            url = url + launchingFilter + landingFilter + yearFilter;
            let data = axios.get(url);
            data.then(res => {
                this.setState({ flightData: res.data, loader: false, isSuccessfullLand: successfullLanding })
            })
        }
    }
    missionYearUI() {
        return <div className="row">
            <p className="filter-title text-center">Launch Year</p>
            {[...Array(15)].map((e, i) => {
                i = 2006 + i;
                let makeButtonBold = i === this.state.selectedYear ? "button-selected" : "";
                return <div className="col-6 text-center" key={i}>
                    <CustomButton text={i} classValue={makeButtonBold} onClick={() => this.filterFunction(i, false, false)} />
                </div>
            })
            }
        </div>
    }
    successfulLaunchUI() {
        return <div className="row successfull-launch">
            <p className="filter-title text-center">Successfull Launch</p>
            <div className="col-6 text-center"><CustomButton text="true" classValue={this.state.isSuccessfulLaunch === "true" ? "button-selected" : ""} onClick={() => this.filterFunction(false, "true", false)} /></div>
            <div className="col-6 text-center"><CustomButton text="false" classValue={this.state.isSuccessfulLaunch === "false" ? "button-selected" : ""} onClick={() => this.filterFunction(false, "false", false)} /></div>
        </div>
    }
    successfullLandUI() {
        return <div className="row successfull-launch">
            <p className="filter-title text-center">Successfull Land</p>
            <div className="col-6 text-center"><CustomButton text="true" classValue={this.state.isSuccessfullLand === "true" ? "button-selected" : ""} onClick={() => this.filterFunction(false, false, "true")} /></div>
            <div className="col-6 text-center"><CustomButton text="false" classValue={this.state.isSuccessfullLand === "false" ? "button-selected" : ""} onClick={() => this.filterFunction(false, false, "false")} /></div>
        </div>
    }

    cardUI() {
        return this.state.flightData.map((data, i) => {
            return <div className="align-items-stretch card-data" key={i}>
                <div className="card-conatainer">
                    <div className="image-wrapper">
                        <img src={data.links.mission_patch} alt={"name " + data.mission_name} />
                    </div>
                    <p className="mission-name"><b>{data.mission_name} </b> </p>
                    <p className="mission-id"><strong>Mission Ids </strong> </p>
                    <ol><li className="mission-id-res">{data.mission_id.length ? data.mission_id[0] : "Not Present"}</li></ol>
                    <p className="launch-year"><strong>Launch Year : </strong><span>{data.launch_year}</span></p>
                    <p className="success"><strong>Successfull Launch : </strong><span>{data.launch_success ? "true" : "false"}</span></p>
                    <p className="landing"><strong>Successfull Landing : </strong><span>{data.rocket.first_stage.cores[0].land_success ? "true" : "false"}</span></p>
                </div>
            </div>

        })
    }
    render() {
        return (
            <section className="row home-wrapper">
                {this.state.loader && <div className="spinner-loading"><div className="loader"></div></div>}
                <div className="col-12 col-sm-4 col-md-3 col-lg-2">
                    <div className="filter-section">
                        <h3>Filters</h3>
                        {this.missionYearUI()}
                        {this.successfulLaunchUI()}
                        {this.successfullLandUI()}
                    </div>
                </div>
                <div className="col-12 col-sm-8 col-md-9 col-lg-10  mission-details">
                    {!this.state.loader && <div className="row card-wrapper">
                        {this.state.flightData && this.state.flightData.length > 0 ? this.cardUI() : <h1>No Result found</h1>}
                    </div>}
                </div>

            </section>
        )
    }
}
