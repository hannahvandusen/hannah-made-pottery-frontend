import React, { useRef }from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import pottery from '../images/pottery-image.jpg'
import white from '../images/white.jpg'
import black from '../images/black.jpg'

function Home() {

    const buttonStyle = {
        backgroundColor: "#c0311f",
        color: "#fffce5"
    }

    const formRef = useRef(); 
    const nameRef = useRef(); 
    const emailRef = useRef();
    const commentRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const comment = commentRef.current.value;

        const bodyObj = JSON.stringify({
            name, 
            email,
            comment
        }); 
        const url = `http://localhost:4000/contact`
        const headers = new Headers({
            "Content-Type": "application/json",
        })

        const requestOptions = {
            headers,
            body: bodyObj,
            method: "POST",
        }

        try {
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            if(data.newContact) {
                alert(`Thanks for reaching out! We'll be in touch soon :)`)
                formRef.current.reset(); 
            } else {
                alert(`Sorry, contact failed!`)
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
    <div>
        <main style={{alignItems: "center"}}>
            <section>
                <img src={pottery} style={{width: "100%"}} />
            </section>
            <section style={{justifyContent: "center", padding: "2%"}}>
                <h1 style={{fontSize: "2em"}}>Hannah Made Pottery</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, sed. Doloremque perspiciatis, voluptatum laborum quam totam repellendus vitae placeat officia rem tempora eos error dolor maiores sed perferendis nisi sunt!
                Cumque deleniti, minus facere ea quidem perferendis laborum nostrum eveniet reiciendis illum ab, quibusdam animi, quod assumenda dolores error nulla? Eum ea velit iure. Quae tenetur totam eaque repellendus voluptatum.
                Cupiditate, asperiores porro voluptate dignissimos nostrum iusto soluta perspiciatis dicta sed, voluptatum, sapiente reiciendis impedit saepe? Vero ratione expedita minus. Corporis id voluptatibus sequi. Eius, molestias. Sequi velit adipisci nostrum?
                Deserunt fugit, soluta inventore voluptas distinctio officia facere veritatis ducimus nam excepturi corporis voluptate unde aliquam magnam! Eius vitae voluptatem, molestiae consequatur temporibus quo sapiente blanditiis? Officia consequuntur quibusdam error.
                Asperiores aliquam aspernatur numquam quidem molestias voluptatem temporibus enim, ea eligendi nemo cumque tempora nam adipisci quisquam sint et tenetur! Expedita consectetur corrupti modi aliquam pariatur excepturi omnis quia accusamus.
                Quasi itaque dolorem, deleniti cumque eum pariatur, ipsum suscipit ducimus dicta esse molestias ex debitis praesentium eos cum natus magnam? Tenetur sequi quia facere totam tempora reprehenderit aliquid, possimus ut.
                Asperiores at quisquam facilis eius ipsum sed tempora facere, debitis temporibus doloremque. Libero, dicta. Eos soluta reprehenderit, culpa ullam quam, ipsum beatae, voluptate voluptatum corporis pariatur nesciunt inventore ut saepe.
                Omnis maiores non illum soluta suscipit, officia natus, odit sunt ipsum aut explicabo. </p>
            <Button style={buttonStyle} href="/about">Read Hannah's Story</Button>
            </section>
        </main>
        <section>
            <img src={black} alt="image" style={{width: "48vw", paddingRight: "1vw"}} />
            <img src={white} style={{width: "48vw", paddingLeft: "1vw"}} /> 
        </section>
        <section style={{padding: "3%"}}>
            <header style={{fontSize: "2em"}}>Connect with Hannah</header>
            <Form onSubmit={handleSubmit} innerRef={formRef} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <FormGroup>
                    <Input
                    id='Name'
                    name='name'
                    placeholder='Name or Business'
                    type='name'
                    style={{width: "50vw"}}
                    innerRef={nameRef}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Input
                    id='email'
                    name='email'
                    placeholder='Email Address'
                    type='email'
                    style={{width: "50vw"}}
                    innerRef={emailRef}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Input
                    id='comment'
                    name='comment'
                    placeholder='Comment'
                    type='textarea'
                    style={{width: "50vw"}}
                    innerRef={commentRef}
                    /> 
                </FormGroup>
                <Button type='submit' style={buttonStyle}>Connect</Button>
            </Form>
        </section>
    </div>
    )
}

export default Home