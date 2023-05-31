import React, { useState } from 'react'
import axios from 'axios'
import { AiOutlineCopy } from 'react-icons/ai'

const UrlShortner = () => {
    const [form, setForm] = useState("")
    const [redirectUrl, setRedirectUrl] = useState("")
    const [showUrl, setShowUrl] = useState("")

  


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            const res = await axios.post('https://unleashed-private-lantern.glitch.me/url/shorten',{longUrl : form})

            setShowUrl(res.data.data.shortUrl)

            if(res.data.status===true){
                const shortUrl = `https://unleashed-private-lantern.glitch.me/${res.data.data.urlCode}`;
                const getshortUrl = await axios.get(shortUrl);
                setRedirectUrl(getshortUrl.data.data)
            }
           
        } catch (error) {
            console.log(error)
        }
    }



  return (
    <div className='shortUrl'>

        <div className="about_url mmt">
            <div className="title mmt">
                URL Shortner
            </div>

            <div className="desc mmt">
                URL shortener with advanced features. It allows you to shorten a long link into short smart link that, Monitor clicks and optimize your marketing campaigns.
            </div>
        </div>



        <div className="box_url">

           <form onSubmit={handleSubmit} className='form_main'>
                <input className='form_inpt' onChange={(e)=>setForm(e.target.value)} name="longUrl" type="url" required={true} placeholder="Enter Link Here..."/>

                <button type="submit" className="sub_btn">Shorten URL</button>
           </form>



        </div>


        {showUrl &&(
        <div className="show_res">
                <div className="show_url_to_red mmt">
                           <a href={redirectUrl} target="_blank" rel="noopener noreferrer" className="uri_a mmt">
                        {showUrl}
                    </a>

                    <div className="coputhis mmt copyicon">
                        <AiOutlineCopy  className="mmt"/>
                    </div>
                </div>
        </div>
        )}

    </div>
  )
}

export default UrlShortner