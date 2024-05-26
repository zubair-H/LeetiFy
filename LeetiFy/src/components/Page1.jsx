import React from 'react'
import './css/Page1.css';
import Plot from 'react-plotly.js'

export default function Page1() {
  return (
    <div className="container">
      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: Arrays <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>

      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>


      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>



      <div>
        <div className="box">
          <h2>My Plotly Chart</h2>
          <Plot
            data={[
              {
                x: ['A', 'B', 'C'],
                y: [2, 5, 3],
                type: 'bar',
                marker: { color: 'blue' },
              },
            ]}
            layout={{ width: 200, height: 200, title: 'A Simple Bar Chart' }}
          />


        </div>
      </div>

      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand"> Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>


      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>


      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>




      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>


      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>


      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>


      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>



      <div className="box">
        <ul className="list">
          <li id="topicArrays">Topic: <button id="Expand">Expand</button></li>
          <li>1. Two Sum <button>+</button> <button>Link</button></li>
          <li>2. Best Time to Buy and Sell Stock <button> +</button> <button>Link</button> </li>
          <li>3. Contains Duplicate <button>+</button> <button>Link</button></li>
          <li>4. Product of Array Except Self <button>+</button> <button>Link</button></li>
          <li>5. Maximum Subarray <button>+</button> <button>Link</button></li>
          <li>6. Maximum Product Subarray <button>+</button> <button>Link</button></li>
          <li>7. Find Minimum in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>8. Search in Rotated Sorted Array <button>+</button> <button>Link</button></li>
          <li>9. 3 Sum <button>+</button> <button>Link</button></li>
          <li>10. Container With Most Water <button>+</button> <button>Link</button></li>
        </ul>
      </div>



    </div >




  );
}