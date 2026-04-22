import {Container} from 'react-bootstrap';
import * as React from 'react';
import { useEffect } from 'react';

type AudiomProps = {
    iframeUrl: string;
    pageTitle?: string;
}

export default function Audiom(props: AudiomProps) {
    useEffect(() => {
        if (props.pageTitle) {
            document.title = `${props.pageTitle} - Table vs. Map Study Condition Site`;
        }
    }, [props.pageTitle]);

    return (
        <Container fluid>
            <iframe
                title={props.pageTitle || 'Audiom Map'}
                src={props.iframeUrl}
                width="1000"
                height="800"
            ></iframe>
        </Container>
    )
}
