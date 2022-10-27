import * as React from 'react';


const MyCard = ({sx}) => {
    return (
        <>
            <div
                style={{
                    'display': 'flex',
                    'flex-direction': 'row',
                    'align-items': 'center',
                    'align-content': 'center'
                }}
            >
                <div style={{
                    'border': sx.border.style ? sx.border.style :'1px solid #141E30',
                    'border-radius': '5px',
                    'height': '200px',
                    'width': '200px',
                    'display': 'flex',
                    'flex-direction': 'column',
                    'align-items': 'center',
                    'align-content': 'center'
                }}
                >
                    <p style={{ 
                        'color': sx.title.color ? sx.title.color :'#141E30', 
                        'font-size': sx.title.size 
                    }}
                        >
                        {sx.title.text}
                    </p>
                    <p style={{
                        'color': sx.body.color ? sx.body.color :'#141E30',
                        'font-size': sx.body.size 
                    }}
                        >
                        {sx.body.text}
                    </p>
                </div>
            </div>
        </>
    );
}
export default MyCard;