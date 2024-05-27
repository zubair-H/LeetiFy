import React from 'react';
import Plot from 'react-plotly.js';
import Page1 from './Page1';

export default function Graph() {
    return (
        <div>
            <Plot
                data={[
                    {
                        labels: ['Remaining', 'Completed'],
                        values: [75, counter],
                        type: 'pie',
                        hole: 0.7,
                        textinfo: 'label+percent',
                        marker: {
                            colors: ['#b8bcb9', '#00ff6a'],
                        },
                        domain: {
                            x: [0, 1],
                            y: [0, 1]
                        }
                    },
                ]}
                layout={{
                    width: 500,
                    height: 800,
                    title: {
                        text: 'Current Progress',
                        x: 0.5,
                        y: 0.8,
                        xanchor: 'center',
                        yanchor: 'top',
                        font: {  // Customize font properties
                            size: 34,         // Font size
                            color: '#fff',    // Font color
                        }
                    },
                    margin: { l: 70, r: 20, b: 20, t: 50 },
                    showlegend: false,
                    paper_bgcolor: 'rgb(0,0,0)',
                    plot_bgcolor: 'rgb(255,255,255)'

                }}
                config={{
                    displayModeBar: false,
                }}
            />
        </div>
    );
}

