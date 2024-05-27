import React, { useEffect, useRef, useState } from 'react';
import './css/Page1.css';
import Graph from './Graph';
import Plot from 'react-plotly.js';


export default function Page1() {
  const [showNotes, setShowNotes] = useState(false);
  const [notes, setNotes] = useState('');
  const [counter, setCounter] = useState(0);
  const checkboxRefs = useRef({});

  // Retrieve stored checkbox state from local storage
  useEffect(() => {
    const storedCheckboxes = JSON.parse(localStorage.getItem('checkboxes')) || {};
    let totalChecked = 0; // Variable to track total checked checkboxes
    Object.keys(storedCheckboxes).forEach(checkboxId => {
      const isChecked = storedCheckboxes[checkboxId];
      if (checkboxRefs.current[checkboxId]) {
        checkboxRefs.current[checkboxId].checked = isChecked;
        const textId = `text${checkboxId.replace('check', '')}`;
        const defaultText = document.getElementById(textId).textContent;
        check(checkboxId, textId, defaultText, false);
        if (isChecked) {
          totalChecked++; // Increment total checked
        }
      }
    });
    // Update counter with total checked value
    setCounter(totalChecked);
    // Save total checked value to local storage
    localStorage.setItem('counter', totalChecked);
  }, []);

  // Save checkbox state to local storage
  const saveCheckboxState = (checkboxId, isChecked) => {
    const storedCheckboxes = JSON.parse(localStorage.getItem('checkboxes')) || {};
    storedCheckboxes[checkboxId] = isChecked;
    localStorage.setItem('checkboxes', JSON.stringify(storedCheckboxes));
  };

  const toggleNotes = () => {
    setShowNotes(!showNotes);
  };

  const handleChange = (event) => {
    setNotes(event.target.value);
  };

  const check = (checkboxId, textId, defaultText, updateStorage = true) => {
    const checkbox = checkboxRefs.current[checkboxId];
    const textElement = document.getElementById(textId);

    if (checkbox && checkbox.checked) {
      textElement.style.color = "#00ff6a";
      // Check if the checkmark span already exists, if not, add it
      if (!textElement.querySelector('span')) {
        const checkmarkSpan = document.createElement('span');
        checkmarkSpan.style.color = "#00ff6a";
        checkmarkSpan.innerText = ' (✓)';
        textElement.appendChild(checkmarkSpan);
      }
      setCounter(prevCounter => {
        const newCounter = prevCounter + 1;
        if (updateStorage) {
          localStorage.setItem('counter', newCounter);
        }
        return newCounter;
      });
      if (updateStorage) {
        saveCheckboxState(checkboxId, true);
      }
    } else {
      textElement.style.color = "white";
      // Remove any existing checkmark span
      const existingCheckmark = textElement.querySelector('span');
      if (existingCheckmark) {
        textElement.removeChild(existingCheckmark);
      }
      setCounter(prevCounter => {
        const newCounter = prevCounter > 0 ? prevCounter - 1 : 0;
        if (updateStorage) {
          localStorage.setItem('counter', newCounter);
        }
        return newCounter;
      });
      if (updateStorage) {
        saveCheckboxState(checkboxId, false);
      }
    }
  };
  console.log(counter);



  const handleRef = (checkboxId) => (element) => {
    checkboxRefs.current[checkboxId] = element;
  };

  return (
    <>


      <div className="container">

        <div className="box">


          <ul className="list">

            <li id="topicArrays">Topic: Arrays

            </li>
            <li>
              <input
                id='check1'
                type="checkbox"
                ref={handleRef('check1')}
                onClick={() => check('check1', 'text1', document.getElementById('text1').textContent)}
              />
              <p id='text1'>1. (Difficulty: Easy) Two Sum</p>
              <div id='buttonDiv'>
                <button id='oneBtn'>Notes</button>
                <button id='one1Btn'>Link</button>
              </div>
            </li>
            <li>
              <input
                id='check2'
                type="checkbox"
                ref={handleRef('check2')}
                onClick={() => check('check2', 'text2', document.getElementById('text2').textContent)}
              />
              <p id='text2'>2. (Difficulty: Easy) Best Time to Buy and Sell Stock</p>
            </li>
            <li>
              <input
                id='check3'
                type="checkbox"
                ref={handleRef('check3')}
                onClick={() => check('check3', 'text3', document.getElementById('text3').textContent)}
              />
              <p id='text3'>3. (Difficulty: Easy) Contains Duplicate</p>
            </li>
            <li>
              <input
                id='check4'
                type="checkbox"
                ref={handleRef('check4')}
                onClick={() => check('check4', 'text4', document.getElementById('text4').textContent)}
              />
              <p id='text4'>4. (Difficulty: Medium) Product of Array Except Self</p>
            </li>
            <li>
              <input
                id='check5'
                type="checkbox"
                ref={handleRef('check5')}
                onClick={() => check('check5', 'text5', document.getElementById('text5').textContent)}
              />
              <p id='text5'>5. (Difficulty: Medium)Maximum Subarray</p>
            </li>
            <li>
              <input
                id='check6'
                type="checkbox"
                ref={handleRef('check6')}
                onClick={() => check('check6', 'text6', document.getElementById('text6').textContent)}
              />
              <p id='text6'>6. (Difficulty: Medium)Maximum Product Subarray</p>
            </li>
            <li>
              <input
                id='check7'
                type="checkbox"
                ref={handleRef('check7')}
                onClick={() => check('check7', 'text7', document.getElementById('text7').textContent)}
              />
              <p id='text7'>7. (Difficulty: Medium)Find Minimum in Rotated Sorted Array</p>
            </li>
            <li>
              <input
                id='check8'
                type="checkbox"
                ref={handleRef('check8')}
                onClick={() => check('check8', 'text8', document.getElementById('text8').textContent)}
              />
              <p id='text8'>8. (Difficulty: Medium)Search in Rotated Sorted Array</p>
            </li>
            <li>
              <input
                id='check9'
                type="checkbox"
                ref={handleRef('check9')}
                onClick={() => check('check9', 'text9', document.getElementById('text9').textContent)}
              />
              <p id='text9'>9. (Difficulty: Medium)Three Sum</p>
            </li>
            <li>
              <input
                id='check10'
                type="checkbox"
                ref={handleRef('check10')}
                onClick={() => check('check10', 'text10', document.getElementById('text10').textContent)}
              />
              <p id='text10'>10. (Difficulty: Medium)Container With Most Water</p>
            </li>
          </ul>





        </div>





        <div className='graph'>
          <div>
            <Plot
              data={[
                {
                  labels: ['Remaining', 'Completed'],
                  values: [75, counter],
                  type: 'pie',
                  textinfo: 'label+percent',
                  marker: {
                    colors: ['#FFFFFF', '#32CD32'] // Example colors for segments
                  },
                  hole: 0.8,
                  textposition: 'outside',
                  textfont: {
                    family: 'Arial, sans-serif',
                    size: 16,
                    color: ['#FFFFFF', '#32CD32'] // Specify the colors for the labels
                  },

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
                  yanchor: 'bottom',
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
        </div>






      </div>

    </>
  );
}
