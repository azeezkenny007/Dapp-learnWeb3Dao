import "./ethers-5.6.esm.min.mjs"
import {ContractAddress,Abi} from './constants.mjs'
import { ethers } from "./ethers-5.6.esm.min.mjs"


const getMoodButton= document.getElementById("getMood")
const setMoodButton= document.getElementById("setMood")
console.log(getMoodButton)
const moodValue= document.getElementById("mood")

const connectButton =document.getElementById("connect")

connectButton.onclick=connect
setMoodButton.onclick=setMood
getMoodButton.onclick=getMood

   async function connect(){
   if(typeof window.ethereum !="undefined"){
      try{
          await window.ethereum.request({method :"eth_requestAccounts"})
          console.log("metamask connected")
          connectButton.innerHTML="connected"
      }
      catch(e){
          console.log(e)
      }
        
   }
   else{
      console.log("please install metamask")
   }
   }


   async function setMood(){
      if(typeof window.ethereum !="undefined"){
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const signer = provider.getSigner()
          const MoodDiary = new ethers.Contract(ContractAddress,Abi,signer)

          
          try {
              const transactionReceipts = await MoodDiary.setMood(moodValue.value)
          } catch (e) {
              console.log(e)
          }
      }
      else{
         console.log("please install metamask")
      }
   }


   async function getMood() {
       if (typeof window.ethereum != "undefined") {
           const provider = new ethers.providers.Web3Provider(window.ethereum)
           const signer = await provider.getSigner()
           const MoodDiary = new ethers.Contract(ContractAddress, Abi, signer)

           try {
               const transactionReceipts = await MoodDiary.getMood()
               console.log(transactionReceipts)
           } catch (e) {
               console.log(e)
           }
       } else {
           console.log("please install metamask")
       }
   }

