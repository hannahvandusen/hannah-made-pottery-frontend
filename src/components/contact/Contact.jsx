import React, { useRef } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'

function Contact() {
    const buttonStyle = {
        backgroundColor: "#c0311f",
        color: "#fffce5"
    }
    
    const formRef = useRef(); 
    const nameRef = useRef(); 
    const emailRef = useRef();
    const phoneRef = useRef();
    const reasonRef = useRef();
    const commentRef = useRef();
    const hearRef = useRef(); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const reason = reasonRef.current.value;
        const comment = commentRef.current.value;
        const hear = hearRef.current.value;

        const bodyObj = JSON.stringify({
            name, 
            email,
            phone,
            reason,
            comment,
            hear
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
        <section style={{padding: "3%", height: "80vh"}}>
            <header style={{fontSize: "2em"}}>Connect with Hannah</header>
            <Form innerRef={formRef} onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <FormGroup>
                    <Input
                    id='Name'
                    name='name'
                    placeholder='Name or Business'
                    type='name'
                    style={{width: "65vw"}}
                    innerRef={nameRef}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Input
                    id='email'
                    name='email'
                    placeholder='Email Address'
                    type='email'
                    style={{width: "65vw"}}
                    innerRef={emailRef}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Input
                    id='phone'
                    name='phone'
                    placeholder='Phone Number'
                    type='phone'
                    style={{width: "65vw"}}
                    innerRef={phoneRef}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label>What's your reason for reaching out?</Label>
                    <Input
                    name='select'
                    type='select'
                    style={{width: "65vw"}}
                    innerRef={reasonRef}
                    >
                        <option></option>
                        <option value={"Custom Creation"}>Custom Creation</option>
                        <option value={"Consultation"} >Consultation</option>
                        <option value={"General Question"}>General Question</option>
                        <option value={"Issue with Order"}>Issue with Order</option>
                        <option value={"Other"}>Other</option>
                    </Input>
                </FormGroup>

                <FormGroup>
                    <Input
                    id='comment'
                    name='comment'
                    placeholder='Inquiry details'
                    type='textarea'
                    style={{width: "65vw"}}
                    innerRef={commentRef}
                    /> 
                </FormGroup>
                <FormGroup>
                    <Label>How did you hear about Hannah Made Pottery?</Label>
                    <Input
                    name='select'
                    type='select'
                    style={{width: "65vw"}}
                    innerRef={hearRef}
                    >
                        <option></option>
                        <option value={"Instagram"}>Instagram</option>
                        <option value={"Facebook"}>Facebook</option>
                        <option value={"Around Town"}>Around Town</option>
                        <option value={"Friend or Family Member"}>Friend or Family Member</option>
                        <option value={"Other"}>Other</option>
                    </Input>
                </FormGroup>
                <Button type='submit' style={buttonStyle}>Connect</Button>
            </Form>
        </section>

    </div>
  )
}

export default Contact