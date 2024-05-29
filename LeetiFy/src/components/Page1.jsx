import React, { useEffect, useRef, useState } from 'react';
import './css/Page1.css';
import Plot from 'react-plotly.js';
import Inner from './Inner';

export default function Page1() {
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
        check(checkboxId, isChecked); // Check the associated text if the checkbox is checked
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

  const check = (checkboxId, isChecked, updateStorage = true) => {
    const textId = `t${checkboxId.replace('c', '')}`;
    const textElement = document.getElementById(textId);

    if (textElement) {
      if (isChecked) {
        textElement.classList.add('checked');
      } else {
        textElement.classList.remove('checked');
      }
    }

    if (updateStorage) {
      // Update counter
      const totalChecked = Object.values(checkboxRefs.current).filter(ref => ref.checked).length;
      setCounter(totalChecked);

      // Save checkbox state to local storage
      saveCheckboxState(checkboxId, isChecked);
    }
  };

  const handleRef = (checkboxId) => (element) => {
    if (element) {
      checkboxRefs.current[checkboxId] = element;
    }
  };

  const handleCheckboxClick = (checkboxId) => {
    const checkbox = checkboxRefs.current[checkboxId];
    const isChecked = checkbox.checked;
    check(checkboxId, isChecked);
  };
  console.log(counter);

  return (
    <>


      <div className="container">


        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Arrays</li>
            <li>
              <input
                id='c1'
                type="checkbox"
                ref={handleRef('c1')}
                onClick={() => handleCheckboxClick('c1')}
              />  <p  className='tone' id='t1'>1. (Difficulty: Easy) Two Sum </p>
             
              
              
              <div id='innerBtn'>
                <Inner id='o1'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c2'
                type="checkbox"
                ref={handleRef('c2')}
                onClick={() => handleCheckboxClick('c2')}
              />
              <p id='t2'>2. (Difficulty: Easy) Best Time to Buy and Sell Stock </p>
              <div id='innerBtn'>
                <Inner id='o2'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c3'
                type="checkbox"
                ref={handleRef('c3')}
                onClick={() => handleCheckboxClick('c3')}
              />
              <p id='t3'>3. (Difficulty: Easy) Contains Duplicate </p>
              <div id='innerBtn'>
                <Inner id='o3'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c4'
                type="checkbox"
                ref={handleRef('c4')}
                onClick={() => handleCheckboxClick('c4')}
              />
              <p id='t4'>4. (Difficulty: Medium) Product of Array Except Self </p>
              <div id='innerBtn'>
                <Inner id='o4'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c5'
                type="checkbox"
                ref={handleRef('c5')}
                onClick={() => handleCheckboxClick('c5')}
              />
              <p id='t5'>5. (Difficulty: Medium) Maximum Subarray </p>
              <div id='innerBtn'>
                <Inner id='o5'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c6'
                type="checkbox"
                ref={handleRef('c6')}
                onClick={() => handleCheckboxClick('c6')}
              />
              <p id='t6'>6. (Difficulty: Medium) Maximum Subarray </p>
              <div id='innerBtn'>
                <Inner id='o6'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c7'
                type="checkbox"
                ref={handleRef('c7')}
                onClick={() => handleCheckboxClick('c7')}
              />
              <p id='t7'>7. (Difficulty: Medium) Find Minimum in Rotated Sorted Array </p>
              <div id='innerBtn'>
                <Inner id='o7'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c8'
                type="checkbox"
                ref={handleRef('c8')}
                onClick={() => handleCheckboxClick('c8')}
              />
              <p id='t8'>8. (Difficulty: Medium) Search in Rotated Sorted Array </p>
              <div id='innerBtn'>
                <Inner id='o8'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c9'
                type="checkbox"
                ref={handleRef('c9')}
                onClick={() => handleCheckboxClick('c9')}
              />
              <p id='t9'>9. (Difficulty: Medium) 3 Sum </p>
              <div id='innerBtn'>
                <Inner id='o9'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c10'
                type="checkbox"
                ref={handleRef('c10')}
                onClick={() => handleCheckboxClick('c10')}
              />
              <p id='t10'>10. (Difficulty: Medium) 3 Sum </p>
              <div id='innerBtn'>
                <Inner id='o10'></Inner>
              </div>
            </li>







          </ul>
        </div>

        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Binary</li>
            <li>
              <input
                id='c11'
                type="checkbox"
                ref={handleRef('c11')}
                onClick={() => handleCheckboxClick('c11')}
              />
              <p id='t11'>1. (Difficulty: Medium) Sum of Two Integers </p>
              <div id='innerBtn'>
                <Inner id='o11'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c12'
                type="checkbox"
                ref={handleRef('c12')}
                onClick={() => handleCheckboxClick('c12')}
              />
              <p id='t12'>2. (Difficulty: Medium) Number of 1 Bits </p>
              <div id='innerBtn'>
                <Inner id='o12'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c13'
                type="checkbox"
                ref={handleRef('c13')}
                onClick={() => handleCheckboxClick('c13')}
              />
              <p id='t13'>3. (Difficulty: Medium) Counting Bits </p>
              <div id='innerBtn'>
                <Inner id='o13'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c14'
                type="checkbox"
                ref={handleRef('c14')}
                onClick={() => handleCheckboxClick('c14')}
              />
              <p id='t14'>4. (Difficulty: Medium) Missing Number </p>
              <div id='innerBtn'>
                <Inner id='o14'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c15'
                type="checkbox"
                ref={handleRef('c15')}
                onClick={() => handleCheckboxClick('c15')}
              />
              <p id='t15'>5. (Difficulty: Medium) Reverse Bits</p>
              <div id='innerBtn'>
                <Inner id='o15'></Inner>
              </div>
            </li>




          </ul>
        </div>

        

        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Dynamic Programming</li>
            <li>
              <input
                id='c16'
                type="checkbox"
                ref={handleRef('c16')}
                onClick={() => handleCheckboxClick('c16')}
              />
              <p id='t16'>1. (Difficulty: Easy) Climbing Stairs</p>
              <div id='innerBtn'>
                <Inner id='o16'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c17'
                type="checkbox"
                ref={handleRef('c17')}
                onClick={() => handleCheckboxClick('c17')}
              />
              <p id='t17'>2. (Difficulty: Medium) Coin Change</p>
              <div id='innerBtn'>
                <Inner id='o12'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c18'
                type="checkbox"
                ref={handleRef('c18')}
                onClick={() => handleCheckboxClick('c18')}
              />
              <p id='t18'>3. (Difficulty: Medium) Longest Increasing Subsequence </p>
              <div id='innerBtn'>
                <Inner id='o18'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c19'
                type="checkbox"
                ref={handleRef('c19')}
                onClick={() => handleCheckboxClick('c19')}
              />
              <p id='t19'>4. (Difficulty: Medium) Longest Common Subsequence </p>
              <div id='innerBtn'>
                <Inner id='o19'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c20'
                type="checkbox"
                ref={handleRef('c20')}
                onClick={() => handleCheckboxClick('c20')}
              />
              <p id='t20'>5. (Difficulty: Medium) Word Break Problem</p>
              <div id='innerBtn'>
                <Inner id='o20'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c21'
                type="checkbox"
                ref={handleRef('c21')}
                onClick={() => handleCheckboxClick('c21')}
              />
              <p id='t21'>6. (Difficulty: Medium) Combination Sum</p>
              <div id='innerBtn'>
                <Inner id='o21'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c22'
                type="checkbox"
                ref={handleRef('c22')}
                onClick={() => handleCheckboxClick('c22')}
              />
              <p id='t22'>7. (Difficulty: Medium) House Robber</p>
              <div id='innerBtn'>
                <Inner id='o22'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c23'
                type="checkbox"
                ref={handleRef('c23')}
                onClick={() => handleCheckboxClick('c23')}
              />
              <p id='t23'>8. (Difficulty: Medium) House Robber II</p>
              <div id='innerBtn'>
                <Inner id='o23'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c24'
                type="checkbox"
                ref={handleRef('c24')}
                onClick={() => handleCheckboxClick('c24')} s
              />
              <p id='t24'>9. (Difficulty: Medium) Decode Ways</p>
              <div id='innerBtn'>
                <Inner id='o24'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c25'
                type="checkbox"
                ref={handleRef('c25')}
                onClick={() => handleCheckboxClick('c25')}
              />
              <p id='t25'>10. (Difficulty: Medium) Unique Paths</p>
              <div id='innerBtn'>
                <Inner id='o25'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c26'
                type="checkbox"
                ref={handleRef('c26')}
                onClick={() => handleCheckboxClick('c26')}
              />
              <p id='t26'>11. (Difficulty: Medium) Jump Game</p>
              <div id='innerBtn'>
                <Inner id='o26'></Inner>
              </div>
            </li>




          </ul>
        </div>

        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Graph</li>

            <li>
              <input
                id='c27'
                type="checkbox"
                ref={handleRef('c27')}
                onClick={() => handleCheckboxClick('c27')}
              />
              <p id='t27'>1. (Difficulty: Medium) Clone Graph</p>
              <div id='innerBtn'>
                <Inner id='o27'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c28'
                type="checkbox"
                ref={handleRef('c28')}
                onClick={() => handleCheckboxClick('c28')}
              />
              <p id='t28'>2. (Difficulty: Medium) Course Schedule</p>
              <div id='innerBtn'>
                <Inner id='o28'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c29'
                type="checkbox"
                ref={handleRef('c29')}
                onClick={() => handleCheckboxClick('c29')}
              />
              <p id='t29'>3. (Difficulty: Medium) Pacific Atlantic Water Flow</p>
              <div id='innerBtn'>
                <Inner id='o29'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c30'
                type="checkbox"
                ref={handleRef('c30')}
                onClick={() => handleCheckboxClick('c30')}
              />
              <p id='t30'>4. (Difficulty: Medium) Number of Islands</p>
              <div id='innerBtn'>
                <Inner id='o30'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c31'
                type="checkbox"
                ref={handleRef('c31')}
                onClick={() => handleCheckboxClick('c31')}
              />
              <p id='t31'>5. (Difficulty: Medium) Longest Consecutive Sequence</p>
              <div id='innerBtn'>
                <Inner id='o31'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c32'
                type="checkbox"
                ref={handleRef('c32')}
                onClick={() => handleCheckboxClick('c32')}
              />
              <p id='t32'>6. (Difficulty: Medium) Alien Dictionary (Leetcode Premium)</p>
              <div id='innerBtn'>
                <Inner id='o32'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c33'
                type="checkbox"
                ref={handleRef('c33')}
                onClick={() => handleCheckboxClick('c33')}
              />
              <p id='t33'>7. (Difficulty: Medium) Graph Valid Tree (Leetcode Premium) (Leetcode Premium)</p>
              <div id='innerBtn'>
                <Inner id='o33'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c34'
                type="checkbox"
                ref={handleRef('c34')}
                onClick={() => handleCheckboxClick('c34')}
              />
              <p id='t34'>8. (Difficulty: Medium) Number of Connected Components in an Undirected Graph (Leetcode Premium)</p>
              <div id='innerBtn'>
                <Inner id='o34'></Inner>
              </div>
            </li>










          </ul>
        </div>
        <div className='graph'>
          <div>
            <Plot
              data={[
                {
                  labels: ['Remaining', 'Completed'],
                  values: [75 - counter, counter],
                  type: 'pie',
                  textinfo: 'label+percent',
                  marker: {
                    colors: ['#FFFFFF', '#32CD32'] // Example colors for segments
                  },
                  hole: 0.867,
                  textposition: 'outside',
                  textfont: {
                    family: 'Arial, sans-serif',
                    size: 18,
                    color: ['#FFFFFF', '#32CD32'] // Specify the colors for the labels
                  },


                  domain: {
                    x: [0, 1],
                    y: [0, 1]
                  }
                },
              ]}
              layout={{
                width: 560,
                height: 830,
                title: {
                  text: 'Overall Progress',
                  x: 0.55,
                  y: 0.47,
                  xanchor: 'center',
                  yanchor: 'bottom',
                  font: {  // Customize font properties
                    size: 20,         // Font size
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


        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Interval</li>

            <li>
              <input
                id='c35'
                type="checkbox"
                ref={handleRef('c35')}
                onClick={() => handleCheckboxClick('c35')}
              />
              <p id='t35'>1. (Difficulty: Medium) Insert Interval</p>
              <div id='innerBtn'>
                <Inner id='o35'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c36'
                type="checkbox"
                ref={handleRef('c36')}
                onClick={() => handleCheckboxClick('c36')}
              />
              <p id='t36'>2. (Difficulty: Medium) Insert Interval</p>
              <div id='innerBtn'>
                <Inner id='o36'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c37'
                type="checkbox"
                ref={handleRef('c37')}
                onClick={() => handleCheckboxClick('c37')}
              />
              <p id='t37'>3. (Difficulty: Medium) Merge Intervals</p>
              <div id='innerBtn'>
                <Inner id='o37'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c38'
                type="checkbox"
                ref={handleRef('c38')}
                onClick={() => handleCheckboxClick('c38')}
              />
              <p id='t38'>4. (Difficulty: Medium) Non-overlapping Intervals</p>
              <div id='innerBtn'>
                <Inner id='o38'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c39'
                type="checkbox"
                ref={handleRef('c39')}
                onClick={() => handleCheckboxClick('c39')}
              />
              <p id='t39'>5. (Difficulty: Medium) Meeting Rooms (Leetcode Premium)</p>
              <div id='innerBtn'>
                <Inner id='o39'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c40'
                type="checkbox"
                ref={handleRef('c40')}
                onClick={() => handleCheckboxClick('c40')}
              />
              <p id='t40'>6. (Difficulty: Medium) Meeting Rooms II (Leetcode Premium)</p>
              <div id='innerBtn'>
                <Inner id='o40'></Inner>
              </div>
            </li>













          </ul>
        </div>

        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Linked List</li>
            <li>
              <input
                id='c41'
                type="checkbox"
                ref={handleRef('c41')}
                onClick={() => handleCheckboxClick('c41')}
              />
              <p id='t41'>1. (Difficulty: Medium) Reverse a Linked List</p>
              <div id='innerBtn'>
                <Inner id='o41'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c42'
                type="checkbox"
                ref={handleRef('c42')}
                onClick={() => handleCheckboxClick('c42')}
              />
              <p id='t42'>2. (Difficulty: Medium) Detect Cycle in a Linked List</p>
              <div id='innerBtn'>
                <Inner id='o42'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c43'
                type="checkbox"
                ref={handleRef('c43')}
                onClick={() => handleCheckboxClick('c43')}
              />
              <p id='t43'>3. (Difficulty: Easay) Merge Two Sorted Lists</p>
              <div id='innerBtn'>
                <Inner id='o43'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c44'
                type="checkbox"
                ref={handleRef('c44')}
                onClick={() => handleCheckboxClick('c44')}
              />
              <p id='t44'>4. (Difficulty: Easy) Merge K Sorted Lists</p>
              <div id='innerBtn'>
                <Inner id='o44'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c45'
                type="checkbox"
                ref={handleRef('c45')}
                onClick={() => handleCheckboxClick('c45')}
              />
              <p id='t45'>5. (Difficulty: Medium) Remove Nth Node From End Of List</p>
              <div id='innerBtn'>
                <Inner id='o45'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c46'
                type="checkbox"
                ref={handleRef('c46')}
                onClick={() => handleCheckboxClick('c46')}
              />
              <p id='t46'>5. (Difficulty: Medium) Reorder List</p>
              <div id='innerBtn'>
                <Inner id='o46'></Inner>
              </div>
            </li>













          </ul>
        </div>

        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Matrix</li>

            <li>
              <input
                id='c47'
                type="checkbox"
                ref={handleRef('c47')}
                onClick={() => handleCheckboxClick('c47')}
              />
              <p id='t47'>1. (Difficulty: Medium) Set Matrix Zeroes</p>
              <div id='innerBtn'>
                <Inner id='o47'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c48'
                type="checkbox"
                ref={handleRef('c48')}
                onClick={() => handleCheckboxClick('c48')}
              />
              <p id='t48'>2. (Difficulty: Medium) Spiral Matrix</p>
              <div id='innerBtn'>
                <Inner id='o48'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c49'
                type="checkbox"
                ref={handleRef('c49')}
                onClick={() => handleCheckboxClick('c49')}
              />
              <p id='t49'>3. (Difficulty: Medium) Rotate Image</p>
              <div id='innerBtn'>
                <Inner id='o49'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c50'
                type="checkbox"
                ref={handleRef('c50')}
                onClick={() => handleCheckboxClick('c50')}
              />
              <p id='t50'>4. (Difficulty: Medium) Word Search</p>
              <div id='innerBtn'>
                <Inner id='o50'></Inner>
              </div>
            </li>













          </ul>
        </div>

        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: String</li>

            <li>
              <input
                id='c51'
                type="checkbox"
                ref={handleRef('c51')}
                onClick={() => handleCheckboxClick('c51')}
              />
              <p id='t51'>1. (Difficulty: Medium) Longest Substring Without Repeating Characters</p>
              <div id='innerBtn'>
                <Inner id='o51'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c52'
                type="checkbox"
                ref={handleRef('c52')}
                onClick={() => handleCheckboxClick('c52')}
              />
              <p id='t52'>2. (Difficulty: Medium) Longest Repeating Character Replacement</p>
              <div id='innerBtn'>
                <Inner id='o52'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c53'
                type="checkbox"
                ref={handleRef('c53')}
                onClick={() => handleCheckboxClick('c53')}
              />
              <p id='t53'>3. (Difficulty: Medium) Minimum Window Substring</p>
              <div id='innerBtn'>
                <Inner id='o53'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c54'
                type="checkbox"
                ref={handleRef('c54')}
                onClick={() => handleCheckboxClick('c54')}
              />
              <p id='t54'>4. (Difficulty: Medium) Valid Anagram</p>
              <div id='innerBtn'>
                <Inner id='o54'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c55'
                type="checkbox"
                ref={handleRef('c55')}
                onClick={() => handleCheckboxClick('c55')}
              />
              <p id='t55'>5. (Difficulty: Medium) Group Anagrams</p>
              <div id='innerBtn'>
                <Inner id='o55'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c56'
                type="checkbox"
                ref={handleRef('c56')}
                onClick={() => handleCheckboxClick('c56')}
              />
              <p id='t56'>6. (Difficulty: Medium) Valid Parentheses</p>
              <div id='innerBtn'>
                <Inner id='o56'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c57'
                type="checkbox"
                ref={handleRef('c57')}
                onClick={() => handleCheckboxClick('c57')}
              />
              <p id='t57'>7. (Difficulty: Medium) Valid Palindrome</p>
              <div id='innerBtn'>
                <Inner id='o57'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c58'
                type="checkbox"
                ref={handleRef('c58')}
                onClick={() => handleCheckboxClick('c58')}
              />
              <p id='t58'>8. (Difficulty: Medium) Longest Palindromic Substring</p>
              <div id='innerBtn'>
                <Inner id='o58'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c59'
                type="checkbox"
                ref={handleRef('c59')}
                onClick={() => handleCheckboxClick('c59')}
              />
              <p id='t59'>9. (Difficulty: Medium) Palindromic Substrings</p>
              <div id='innerBtn'>
                <Inner id='o59'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c60'
                type="checkbox"
                ref={handleRef('c60')}
                onClick={() => handleCheckboxClick('c60')}
              />
              <p id='t60'>10. (Difficulty: Medium) Encode and Decode Strings (Leetcode Premium)</p>
              <div id='innerBtn'>
                <Inner id='o60'></Inner>
              </div>
            </li>
















          </ul>
        </div>

        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Tree</li>

            <li>
              <input
                id='c61'
                type="checkbox"
                ref={handleRef('c61')}
                onClick={() => handleCheckboxClick('c61')}
              />
              <p id='t61'>1. (Difficulty: Medium) Maximum Depth of Binary Tree</p>
              <div id='innerBtn'>
                <Inner id='o61'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c62'
                type="checkbox"
                ref={handleRef('c62')}
                onClick={() => handleCheckboxClick('c62')}
              />
              <p id='t62'>2. (Difficulty: Medium) Same Tree</p>
              <div id='innerBtn'>
                <Inner id='o62'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c63'
                type="checkbox"
                ref={handleRef('c63')}
                onClick={() => handleCheckboxClick('c63')}
              />
              <p id='t63'>3. (Difficulty: Medium) Invert/Flip Binary Tree</p>
              <div id='innerBtn'>
                <Inner id='o63'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c64'
                type="checkbox"
                ref={handleRef('c64')}
                onClick={() => handleCheckboxClick('c64')}
              />
              <p id='t64'>4. (Difficulty: Medium) Binary Tree Maximum Path Sum</p>
              <div id='innerBtn'>
                <Inner id='o64'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c65'
                type="checkbox"
                ref={handleRef('c65')}
                onClick={() => handleCheckboxClick('c65')}
              />
              <p id='t65'>5. (Difficulty: Medium) Binary Tree Level Order Traversal</p>
              <div id='innerBtn'>
                <Inner id='o65'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c66'
                type="checkbox"
                ref={handleRef('c66')}
                onClick={() => handleCheckboxClick('c66')}
              />
              <p id='t66'>6. (Difficulty: Medium) Serialize and Deserialize Binary Tree</p>
              <div id='innerBtn'>
                <Inner id='o66'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c67'
                type="checkbox"
                ref={handleRef('c67')}
                onClick={() => handleCheckboxClick('c67')}
              />
              <p id='t67'>7. (Difficulty: Medium) Subtree of Another Tree</p>
              <div id='innerBtn'>
                <Inner id='o67'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c68'
                type="checkbox"
                ref={handleRef('c68')}
                onClick={() => handleCheckboxClick('c68')}
              />
              <p id='t68'>8. (Difficulty: Medium) Construct Binary Tree from Preorder and Inorder Traversal</p>
              <div id='innerBtn'>
                <Inner id='o68'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c69'
                type="checkbox"
                ref={handleRef('c69')}
                onClick={() => handleCheckboxClick('c69')}
              />
              <p id='t69'>9. (Difficulty: Medium) Validate Binary Search Tree</p>
              <div id='innerBtn'>
                <Inner id='o69'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c70'
                type="checkbox"
                ref={handleRef('c70')}
                onClick={() => handleCheckboxClick('c70')}
              />
              <p id='t70'>10. (Difficulty: Medium) Validate Binary Search Tree</p>
              <div id='innerBtn'>
                <Inner id='o70'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c71'
                type="checkbox"
                ref={handleRef('c71')}
                onClick={() => handleCheckboxClick('c71')}
              />
              <p id='t71'>11. (Difficulty: Medium) Kth Smallest Element in a BST</p>
              <div id='innerBtn'>
                <Inner id='o71'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c72'
                type="checkbox"
                ref={handleRef('c72')}
                onClick={() => handleCheckboxClick('c72')}
              />
              <p id='t72'>12. (Difficulty: Medium) Lowest Common Ancestor of BST</p>
              <div id='innerBtn'>
                <Inner id='o72'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c73'
                type="checkbox"
                ref={handleRef('c73')}
                onClick={() => handleCheckboxClick('c73')}
              />
              <p id='t73'>13. (Difficulty: Medium) Implement Trie (Prefix Tree)</p>
              <div id='innerBtn'>
                <Inner id='o73'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c74'
                type="checkbox"
                ref={handleRef('c74')}
                onClick={() => handleCheckboxClick('c74')}
              />
              <p id='t74'>14. (Difficulty: Medium) Add and Search Word</p>
              <div id='innerBtn'>
                <Inner id='o74'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c75'
                type="checkbox"
                ref={handleRef('c75')}
                onClick={() => handleCheckboxClick('c75')}
              />
              <p id='t75'>15. (Difficulty: Medium) Word Search II</p>
              <div id='innerBtn'>
                <Inner id='o75'></Inner>
              </div>
            </li>





















          </ul>
        </div>


        <div className="box">
          <ul className="list">
            <li id="topicArrays">Topic: Heap</li>
            <li>
              <input
                id='c76'
                type="checkbox"
                ref={handleRef('c76')}
                onClick={() => handleCheckboxClick('c76')}
              />
              <p id='t76'>1. (Difficulty: Medium) Maximum Depth of Binary Tree</p>
              <div id='innerBtn'>
                <Inner id='o76'></Inner>
              </div>
            </li>






















          </ul>
        </div>




















      </div>

    </>
  );
}
