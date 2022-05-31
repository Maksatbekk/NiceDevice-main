import React from 'react';
import GoogleMapReact from 'google-map-react'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        <section className="map">


                    <iframe className='map__content'
                        width='100%' height='467px'
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9eb0c42d599ef7b4692a61b6ac1fbfe36985a9aed46d1f90872a0c92b8158157&amp;source=constructor"
                            frameBorder="0"/>


        </section>
    );
};

export default Map;