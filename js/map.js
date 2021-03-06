mapboxgl.accessToken = 'pk.eyJ1IjoicmVtZWxpYXNoaXJsbGV5IiwiYSI6ImNsMWhodDY3NjBjcmszaXB3OTMzemtkbXYifQ.pJeHvUL0LGZGu3YSeVDPjA';
        const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/remeliashirlley/cl1hvyabj00bk14s91zmzkrqz', // style URL
        center: [11.306500, 47.110580], // starting position [lng, lat]
        zoom: 1 // starting zoom
        });

        const adrenalinejson = {
        type: 'FeatureCollection',
        features: [
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.907500,46.596230]
            },
            properties: {
                title: 'Mapbox',
                description: 'Snowboard at Jungfrau, Lauterbrunnen, Schweiz',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/jungfrau%2Clauterbrunnen%2Cschweiz.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [5.717930,45.252870]
            },
            properties: {
                title: 'Mapbox',
                description: 'Paragliding at Chartreuse Massif',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/chartreuse%20massif.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [4.273190,52.108030]
            },
            properties: {
                title: 'Mapbox',
                description: 'Bungee Jumping at Scheveningen, The Hague, Netherlands',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/scheveningen%2C%20the%20hague%2C%20netherlands.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-82.915790,34.825730]
            },
            properties: {
                title: 'Mapbox',
                description: 'Wakeboarding at Keowee, SC, USA',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/keowee%2CSC%2CUSA.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-100.894157, 34.392792]
            },
            properties: {
                title: 'Mapbox',
                description: 'Hot Air Balloon at Cappadocia, Turkey',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/cappadocia%20turkey.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [7.907500, 46.596230]
            },
            properties: {
                title: 'Mapbox',
                description: 'Skydiving at Lauterbrunnen, Suiza',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/lauterbrunnen%2C%20suiza.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [146.640250, -23.646440]
            },
            properties: {
                title: 'Mapbox',
                description: 'Horse Riding at Forrester Station, Alpha, Australia',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/forrester%20station%2C%20alpha%2C%20australia.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [11.306500, 47.110580]
            },
            properties: {
                title: 'Mapbox',
                description: 'Skiing at Stubai Zoo, Neustift im Stubaital, Austria',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/stubai%20zoo%2C%20neustift%20im%20stubaital%2C%20austria.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-120.642082, 35.141300]
            },
            properties: {
                title: 'Mapbox',
                description: 'ATV Riding at Pismo Beach, California',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/pismo%20beach%2C%20ca.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [98.833180, 8.037220]
            },
            properties: {
                title: 'Mapbox',
                description: 'Rock Climbing at Tonsai, Ao Nang, Thailand',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/tonsai%2C%20ao%20nang%2C%20thailand.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-111.395150, 40.050470]
            },
            properties: {
                title: 'Mapbox',
                description: 'OHV Trail Riding at Uinta Wasatch Cache National Forest, Utah',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/uinta%20wasatch%20cache%20national%20forest.jpg',
            }
            },
            {
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [24.922220, -34.049171]
            },
            properties: {
                title: 'Mapbox',
                description: 'Surfing at Jeffreys Bay, South Africa',
                image: 'https://raw.githubusercontent.com/remeliashirlley/riverbranch/main/images/jeffreys%20bay%2C%20south%20africa.jpg',
            }
            }
        ]
        }

        for (const feature of adrenalinejson.features) {
            const el = document.createElement('div');
            const img = feature.properties.image;
            const popup=new mapboxgl.Popup({offset:0}).setText(feature.properties.description);
            el.className = 'marker';
            el.style.backgroundImage= `url(${img})`;
            el.style.width = '50px';
            el.style.height = '50px';
            el.style.backgroundSize = '100%';
            new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).setPopup(popup).addTo(map);
        }

        el.addEventListener('click', function() {
            map.flyTo({
                    center: el.feature.geometry.coordinates,
                    zoom:9
                    });
        });