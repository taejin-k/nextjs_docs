/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";

const Setting = async () => {
  return (
    <div>
      Setting Page<div className="p-4">1</div>
      <div className="p-4">2</div>
      <div className="p-4">
        <Link href="/linking-and-navigating/dashboard/list">
          List Page Redirect
        </Link>
      </div>
      <div className="p-4">4</div>
      <div className="p-4">5</div>
      <div id="position" className="p-4">
        6
      </div>
      <div className="p-4">7</div>
      <div className="p-4">8</div>
      <div className="p-4">9</div>
      <div className="p-4">10</div>
      <div className="p-4">11</div>
      <div className="p-4">12</div>
      <div className="p-4">13</div>
      <div className="p-4">
        <Link href="/linking-and-navigating/dashboard">
          Dashboard Page Link scroll true
        </Link>
      </div>
      <div className="p-4">15</div>
      <div className="p-4">16</div>
      <div className="p-4">
        <Link href="/linking-and-navigating/dashboard" scroll={false}>
          Dashboard Page Link scroll false
        </Link>
      </div>
      <div className="p-4">18</div>
      <div className="p-4">19</div>
      <div className="p-4">20</div>
      <div className="p-4">31</div>
      <div className="p-4">32</div>
      <div className="p-4">33</div>
      <div className="p-4">34</div>
      <div className="p-4">35</div>
      <div className="p-4">36</div>
      <div className="p-4">37</div>
      <div className="p-4">38</div>
      <div className="p-4">39</div>
      <div className="p-4">40</div>
    </div>
  );
};

export default Setting;
