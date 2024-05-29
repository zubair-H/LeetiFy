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
              />
              <a id='links' href="https://leetcode.com/problems/two-sum/description/" target="_blank" rel="noopener noreferrer" >
                <p className='tone' id='t1'>1. (Difficulty: Easy) Two Sum </p>
              </a>




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
              <a id='links' href="https://leetcode.com/problems/two-sum/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t2'>2. (Difficulty: Easy) Best Time to Buy and Sell Stock </p>
              </a>
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

              <a id='links' href="https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" target="_blank" rel="noopener noreferrer" >
                <p id='t3'>3. (Difficulty: Easy) Contains Duplicate </p>
              </a>
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
              <a id='links' href="https://leetcode.com/problems/product-of-array-except-self/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t4'>4. (Difficulty: Medium) Product of Array Except Self </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/maximum-subarray/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t5'>5. (Difficulty: Medium) Maximum Subarray </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/maximum-product-subarray/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t6'>6. (Difficulty: Medium) Maximum Product Subarray </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t7'>7. (Difficulty: Medium) Find Minimum in Rotated Sorted Array </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/search-in-rotated-sorted-array/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t8'>8. (Difficulty: Medium) Search in Rotated Sorted Array </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/3sum/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t9'>9. (Difficulty: Medium) 3 Sum </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/container-with-most-water/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t10'>10. (Difficulty: Medium) Container With Most Water</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/sum-of-two-integers/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t11'>1. (Difficulty: Medium) Sum of Two Integers </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/number-of-1-bits/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t12'>2. (Difficulty: Easy) Number of 1 Bits </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/counting-bits/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t13'>3. (Difficulty: Easy) Counting Bits </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/missing-number/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t14'>4. (Difficulty: Easy) Missing Number </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/reverse-bits/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t15'>5. (Difficulty: Easy) Reverse Bits</p>
              </a>

              <div id='innerBtn'>
                <Inner id='o15'></Inner>
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
                  values: [75 - (counter-1), counter],
                  type: 'pie',
                  textinfo: 'label+percent',
                  marker: {
                    colors: ['#FFFFFF', '#32CD32'] // Example colors for segments
                  },
                  hole: 0.867,
                  textposition: 'outside',
                  textfont: {
                    family: 'JetBrains Mono, monospace',
                    size: 18,
                    color: ['#FFFFFF', '#54b87e'] // Specify the colors for the labels
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
                  font: {
                    family: 'JetBrains Mono, monospace', // Change font family here
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
            <li id="topicArrays">Topic: Dynamic Programming</li>
            <li>
              <input
                id='c16'
                type="checkbox"
                ref={handleRef('c16')}
                onClick={() => handleCheckboxClick('c16')}
              />
              <a id='links' href="https://leetcode.com/problems/climbing-stairs/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t16'>1. (Difficulty: Easy) Climbing Stairs</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/coin-change/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t17'>2. (Difficulty: Medium) Coin Change</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/longest-increasing-subsequence/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t18'>3. (Difficulty: Medium) Longest Increasing Subsequence </p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/longest-common-subsequence/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t19'>4. (Difficulty: Medium) Longest Common Subsequence </p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/word-break/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t20'>5. (Difficulty: Medium) Word Break Problem</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/combination-sum-iv/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t21'>6. (Difficulty: Medium) Combination Sum IV</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/house-robber/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t22'>7. (Difficulty: Medium) House Robber</p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/house-robber-ii/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t23'>8. (Difficulty: Medium) House Robber II</p>
              </a>
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
              <a id='links' href="https://leetcode.com/problems/decode-ways/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t24'>9. (Difficulty: Medium) Decode Ways</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/unique-paths/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t25'>10. (Difficulty: Medium) Unique Paths</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/jump-game/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t26'>11. (Difficulty: Medium) Jump Game</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/clone-graph/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t27'>1. (Difficulty: Medium) Clone Graph</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/course-schedule/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t28'>2. (Difficulty: Medium) Course Schedule</p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/pacific-atlantic-water-flow/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t29'>3. (Difficulty: Medium) Pacific Atlantic Water Flow</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/number-of-islands/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t30'>4. (Difficulty: Medium) Number of Islands</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/longest-consecutive-sequence/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t31'>5. (Difficulty: Medium) Longest Consecutive Sequence</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/alien-dictionary/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t32'>6. (Difficulty: Medium) Alien Dictionary (Leetcode Premium)</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/graph-valid-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t33'>7. (Difficulty: Medium) Graph Valid Tree (Leetcode Premium)</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t34'>8. (Difficulty: Medium) Number of Connected Components in an Undirected Graph (Leetcode Premium)</p>
              </a>

              <div id='innerBtn'>
                <Inner id='o34'></Inner>
              </div>
            </li>










          </ul>
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
              <a id='links' href="https://leetcode.com/problems/insert-interval/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t35'>1. (Difficulty: Medium) Insert Interval</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/merge-intervals/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t36'>2. (Difficulty: Medium) Merge Intervals</p>
              </a>

              <div id='innerBtn'>
                <Inner id='o36'></Inner>
              </div>
            </li>



            <li>
              <input
                id='c38'
                type="checkbox"
                ref={handleRef('c38')}
                onClick={() => handleCheckboxClick('c38')}
              />
              <a id='links' href="https://leetcode.com/problems/non-overlapping-intervals/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t38'>3. (Difficulty: Medium) Non-overlapping Intervals</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/meeting-rooms/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t39'>4. (Difficulty: Medium) Meeting Rooms (Leetcode Premium)</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/meeting-rooms-ii/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t40'>5. (Difficulty: Medium) Meeting Rooms II (Leetcode Premium)</p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/reverse-linked-list/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t41'>1. (Difficulty: Easy) Reverse a Linked List</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/linked-list-cycle/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t42'>2. (Difficulty: Easy) Detect Cycle in a Linked List</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/merge-two-sorted-lists/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t43'>3. (Difficulty: Easy) Merge Two Sorted Lists</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/merge-k-sorted-lists/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t44'>4. (Difficulty: Easy) Merge K Sorted Lists</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t45'>5. (Difficulty: Medium) Remove Nth Node From End Of List</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/reorder-list/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t46'>5. (Difficulty: Medium) Reorder List</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/set-matrix-zeroes/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t47'>1. (Difficulty: Medium) Set Matrix Zeroes</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/spiral-matrix/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t48'>2. (Difficulty: Medium) Spiral Matrix</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/spiral-matrix/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t49'>3. (Difficulty: Medium) Rotate Image</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/word-search/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t50'>4. (Difficulty: Medium) Word Search</p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/longest-substring-without-repeating-characters/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t51'>1. (Difficulty: Medium) Longest Substring Without Repeating Characters</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/longest-repeating-character-replacement/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t52'>2. (Difficulty: Medium) Longest Repeating Character Replacement</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/minimum-window-substring/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t53'>3. (Difficulty: Hard) Minimum Window Substring</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/valid-anagram/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t54'>4. (Difficulty: Easy) Valid Anagram</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/group-anagrams/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t55'>5. (Difficulty: Medium) Group Anagrams</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/valid-parentheses/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t56'>6. (Difficulty: Easy) Valid Parentheses</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/valid-palindrome/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t57'>7. (Difficulty: Easy) Valid Palindrome</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/longest-palindromic-substring/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t58'>8. (Difficulty: Medium) Longest Palindromic Substring</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/palindromic-substrings/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t59'>9. (Difficulty: Medium) Palindromic Substrings</p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/encode-and-decode-strings/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t60'>10. (Difficulty: Medium) Encode and Decode Strings (Leetcode Premium)</p>
              </a>

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

              <a id='links' href="https://leetcode.com/problems/maximum-depth-of-binary-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t61'>1. (Difficulty: Easy) Maximum Depth of Binary Tree</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/same-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t62'>2. (Difficulty: Medium) Same Tree</p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/same-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t63'>3. (Difficulty: Easy) Invert/Flip Binary Tree</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/binary-tree-maximum-path-sum/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t64'>4. (Difficulty: Hard) Binary Tree Maximum Path Sum</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/binary-tree-level-order-traversal/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t65'>5. (Difficulty: Medium) Binary Tree Level Order Traversal</p>
              </a>

              <div id='innerBtn'>
                <Inner id='o65'></Inner>
              </div>
            </li>

            <li>
              <a id='links' href="https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" target="_blank" rel="noopener noreferrer" >
                <p id='t66'>6. (Difficulty: Hard) Serialize and Deserialize Binary Tree</p>
              </a>
              <input
                id='c66'
                type="checkbox"
                ref={handleRef('c66')}
                onClick={() => handleCheckboxClick('c66')}
              />
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
              <a id='links' href="https://leetcode.com/problems/subtree-of-another-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t67'>7. (Difficulty: Easy) Subtree of Another Tree</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t68'>8. (Difficulty: Medium) Construct Binary Tree from Preorder and Inorder Traversal</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/validate-binary-search-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t69'>9. (Difficulty: Medium) Validate Binary Search Tree</p>
              </a>

              <div id='innerBtn'>
                <Inner id='o69'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c71'
                type="checkbox"
                ref={handleRef('c71')}
                onClick={() => handleCheckboxClick('c71')}
              />
              <a id='links' href="https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t71'>10. (Difficulty: Medium) Kth Smallest Element in a BST</p>
              </a>
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
              <a id='links' href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t72'>12. (Difficulty: Medium) Lowest Common Ancestor of BST</p>
              </a>


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
              <a id='links' href="https://leetcode.com/problems/implement-trie-prefix-tree/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t73'>13. (Difficulty: Medium) Implement Trie (Prefix Tree)</p>
              </a>

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
              <a id='links' href="https://leetcode.com/problems/design-add-and-search-words-data-structure/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t74'>14. (Difficulty: Medium) Add and Search Word</p>
              </a>
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
              <a id='links' href="https://leetcode.com/problems/word-search-ii/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t75'>15. (Difficulty: Hard) Word Search II</p>
              </a>

              <div id='innerBtn'>
                <Inner id='o75'></Inner>
              </div>
            </li>





















          </ul>
        </div>


        <div className="box">
          <ul className="list">


            <li>
              <input
                id='c76'
                type="checkbox"
                ref={handleRef('c76')}
                onClick={() => handleCheckboxClick('c76')}
              />

              <a id='links' href="https://leetcode.com/problems/merge-k-sorted-lists/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t76'>1. (Difficulty: Hard) Maximum Depth of Binary Tree</p>
              </a>


              <div id='innerBtn'>
                <Inner id='o76'></Inner>
              </div>
            </li>

            <li>
              <input
                id='c77'
                type="checkbox"
                ref={handleRef('c77')}
                onClick={() => handleCheckboxClick('c77')}
              />

              <a id='links' href="https://leetcode.com/problems/top-k-frequent-elements/description/" target="_blank" rel="noopener noreferrer" >
                <p id='t77'>2. (Difficulty: Medium) Top K Frequent Elements</p>
              </a>

              <div id='innerBtn'>
                <Inner id='o77'></Inner>
              </div>
            </li>


            <li>
              <input
                id='c78'
                type="checkbox"
                ref={handleRef('c78')}
                onClick={() => handleCheckboxClick('c78')}
              />

              <a id='links' href="https://leetcode.com/problems/find-median-from-data-stream/description/" target="_blank" rel="noopener noreferrer" >

                <p id='t78'>3. (Difficulty: Hard) Find Median from Data Stream</p>
              </a>


              <div id='innerBtn'>
                <Inner id='o78'></Inner>
              </div>
            </li>























          </ul>
        </div>




















      </div>

    </>
  );
}
