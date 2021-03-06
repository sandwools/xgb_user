import React, { Component } from 'react'
//import { browserHistory } from 'react';

const setting = {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    mode: "cors",
    cache: "default",
    passageContent: "2",
  };

	class Counselors extends Component {
        constructor(props) {
            super(props);
            this.state = {
              dat:['a','b'],
              str:'这是react数据',
  		      num:1,
  		      inputValue:"这是val",
  		      arr:['a','b','c'],
              accDat:[],
              cityName:[ 
              {NAME:"辅导员1",manObj:"2021级本科生",work:"新媒体",phone:"110",workPhone:"120",position:"团委书记",address:"新55-B201",url:"https://s1.328888.xyz/2022/04/26/8YAsM.jpg"},
              {NAME:"辅导员2",manObj:"2021级本科生",work:"新媒体",phone:"110",workPhone:"120",position:"团委书记",address:"新55-B201",url:"https://s1.328888.xyz/2022/04/26/8YAsM.jpg"},
              {NAME:"辅导员3",manObj:"2021级本科生",work:"新媒体",phone:"110",workPhone:"120",position:"团委书记",address:"新55-B201",url:"https://s1.328888.xyz/2022/04/26/8YAsM.jpg"},
              {NAME:"辅导员4",manObj:"2021级本科生",work:"新媒体",phone:"110",workPhone:"120",position:"团委书记",address:"新55-B201",url:"https://s1.328888.xyz/2022/04/26/8YAsM.jpg"},
              {NAME:"辅导员5",manObj:"2021级本科生",work:"新媒体",phone:"110",workPhone:"120",position:"团委书记",address:"新55-B201",url:"https://s1.328888.xyz/2022/04/26/8YAsM.jpg"}
            ]
            };
          }

        componentWillMount()
        {
            console.log(window.location.href)
            let iurl= window.location.href
            let index=iurl.indexOf("=",3)
            iurl=iurl.slice(index+1)

            console.log(iurl)
            fetch(`http://120.48.17.78:8080/api/Assistant/getList/byCollege?college_name=`+ iurl, setting)
            .then(function (response) {
              return response.json();
            })
            .then((res) => {
                console.log("@")
                console.log(res)
                this.setState({
                    accDat: res.data
                },
                ()=>
                 {
                     console.log(this.state.accDat)
                 })
              }).catch((e) => console.log("错误码:", e));
    
        }

        setComponent()
        {
            return this.state.arr.join("");
        }

        renderLi()
        {
          return this.state.accDat.map((item,index)=>{
            return (
                
            <div key={index} style={{padding: '30px',width: '30%',display: 'flex',justifyContent:'center',padding:'25px',borderRadius: "15px",border:'1px solid rgba(0,0,0,0.2)',boxShadow: "0px 0px 5px #888888",
                                      marginLeft:'15%',marginTop:'.5%',marginBottom: '.5%',justifySelf: "stretch",height: "400px"}}>

                <div style={{width: '60%',textAlign: `center`}}>
                    <img src={`http://120.48.17.78:8080/`+item.picName} 
                    style={{width: '80%',borderRadius: "15px",marginTop:`10%`,height: `80%`}}/>
                </div> 

                <div style={{display: 'flex',flexDirection: 'column',paddingLeft:'10px',height: '100%',justifyContent: 'space-between',width: '50%'}}>
                    <div class='text'>
                        姓名： {item.assistantName}
                    </div>
                    <br></br>
                    <div>
                        分管年级：{item.manaGrade}
                    </div>
                    <br></br>
                    <div>
                        分管工作：{item.manaWork}
                    </div>
                    <br></br>
                    <div>
                        现任职务/类型：{item.position}
                    </div>
                    <br></br>
                    {/* <div>
                        手机电话：{item.id}
                    </div>
                    <br></br> */}
                    <div>
                       办公电话：{item.phoneNum}
                    </div>
                    <br></br>
                    <div>
                        办公地址：{item.officeLocation}
                    </div>
                </div>
                    
                
            </div>
            )
          })
        }

        test()
        {
            return this.state.accDat.map((item,index)=>{
                return (
                    <div key={index}>
                        <div class='text'>
                          姓名： {item.id}
                        </div>
                    </div>
                )})
        }

        render () {
            console.log("#")
            return (
                <div className="overall"> 
                   <div style={{display: 'flex',flexDirection: "row",flexWrap: "wrap" ,}}>     
                       {this.renderLi()}
                   </div>

                   <div style={{display: 'flex',flexDirection: "row",flexWrap: "wrap" ,}}>
                       <div>
                           {/* {this.test()} */}
                       </div>
                   </div>

                </div>
            )
        }
      
      }
	export default Counselors






    /*
    可行的原始函数
     renderLi()
        {
          return this.state.cityName.map((item,index)=>{
            return (
                
            <div key={index} style={{padding: '30px',width: '30%',display: 'flex',justifyContent:'center',padding:'25px',borderRadius: "15px",border:'1px solid rgba(0,0,0,0.2)',boxShadow: "0px 0px 5px #888888",
                                      marginLeft:'13%',marginTop:'.5%',marginBottom: '.5%',justifySelf: "stretch",height: '15%'}}>

                <div style={{width: '50%'}}>
                    <img src={item.url} style={{width: '80%',borderRadius: "15px"}}/>
                </div> 

                <div style={{display: 'flex',flexDirection: 'column',paddingLeft:'10px',height: '100%',justifyContent: 'space-between'}}>
                    <div class='text'>
                        姓名： {item.NAME}
                    </div>
                    <br></br>
                    <div>
                        分管年级：{item.manObj}
                    </div>
                    <br></br>
                    <div>
                        手机电话：{item.phone}
                    </div>
                    <br></br>
                    <div>
                       办公电话：{item.workPhone}
                    </div>
                    <br></br>
                    <div>
                        现任职务/类型：{item.position}
                    </div>
                    <br></br>
                    <div>
                        办公地址：{item.address}
                    </div>
                </div>
                    
                
            </div>
            )
          })
        }
    
    */