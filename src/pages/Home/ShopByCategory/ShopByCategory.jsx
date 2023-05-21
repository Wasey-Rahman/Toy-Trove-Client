import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


// 
// Picture,
// Name,
// Price,
// Rating and
// View Details button.


const ShopByCategory = () => {  
     
 
  return (
   <div>
    
      <Tabs>
         <h1 className="text-4xl font-bold text-center my-8 text-blue-600 mt-20">Shop By Category</h1>
    <TabList>
      <Tab>Wind Instruments</Tab>
      <Tab>Percussion Instruments</Tab>
      <Tab>String Instruments</Tab>
    </TabList>

    <TabPanel>
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyMgxIec6VzYU31Yj8yN2TNjKqWFGxpmXaA&usqp=CAU" alt="" /><br />
      <h2 className='text-1xl font-bold  my-8'>Kids Accordion</h2><br />
      <h3>Price:$34</h3><br />
      <h3>Rating :4</h3><br />
     
      <Link to={('/single toy details')}><button className='bg-blue-500 text-white px-4 py-2 rounded mb-4'>View Details</button></Link>
      
      
      
      </div>
      
      <div><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQEhMVERIVEBAWFRAQEBYQEBUVFhUXFhUVFRUYHSggGBolGxUVITEhJikrLi4uFx83OTQsOCgtLisBCgoKDg0OGxAQGy0lHyUzLS0tLS8rLS0tLS0rLi0tLS0tLS0tLS0tLS0tLy0tLS0tLy0tLS0tLS0tLS8tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABgIDBAUHAQj/xABKEAABAwICBgQKBgcGBwEAAAABAAIDBBEFIRIxQVFhcQYHE7EiIzIzUoGRobLBFHJzdILRQkNikqLC8DREU2Sj4SVjhJSzw9Ik/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAMEAQIFBv/EADQRAAIBAgMFBgUCBwAAAAAAAAABAgMRBCExBRJBcaETUWGBkdEiMrHB8BRSBhUjM0LC4f/aAAwDAQACEQMRAD8A7UiIgCIiAIiIAi0vSDpJFSeCfDkIuI2nUN7jsCj8XTmUm5hYW+iHEO9puPctXJImhQnJbyROkWtwbGIqtpMZ8JttON2T2E7xu3EZLZLKd9CKUXF2YREWTAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAWq6TYy2ip3zuzI8FjfSefJHLWTwBW1XIutXF+2qRTNPgQNzGwyOAJ9g0R7VpUluxuWcJQ7aqovTV8iLT4nLLI6V7tJznEknbdbWgrMr7tijwKyIJbFVk2durBNZEhw3HHxyNnjsJGXu3U2SP9KNw5ZjiN669hWIMqYmTRm7XtvxB2tPEHJfP0cxacsiDcKc9X+PCCUwuNopSHDcx5yvwFwW+oLenUtKz4lfGYTep70dV9O77rzXcdTREVk4YREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREBaqp2xsdI7JrGOc7k0En3BfO1XUume+V/lPe57ubiSe9dp6xazssPmtrk0Ix+Nw0v4Q5cSsq1d5pHa2XTtCU+/L0z+pTdehy8KoUSOg0VTO2rOwyW+W0auR/3A9qwCbiyYfJZ9t4I+Y94CwzMHwO39CMe+kR9k8+NY0ZnW9mx3Maj6lJ1xHD610MgfGdFzXBzTwOdjvFjZdbwHGWVcYkbk4WD475td+R2FWqU95WOHjsL2Ut6Oj6GzREUpQCIiAIiIAiIgCIiAIrJqoxrewfjH5qtkzTqcDycCsby0uLMrREW1mAiIsAIiIAiIgCIiAIiIAiIgCIiAIiIDn/XBU+Kgh9KWR3qa3R/9i5eVPutqW9RCzdTl37z3D+RQJwVOq7zZ6TAK2Hj5vr7WLRXhVRVBWhYkUFUXs5rtzmk8gVWVS5bEZIZctE/s2PMLNwfGJKaQSRmxGsHyXDa1w2hYd7xA8fcVZAWibWhNKKmrSR2vAccirGaTDZwA04yfCafmOK2i4ZQzTQOEkRLXDUW/wBZjgugYB07iksypHYv1doB4p3Pa3u5K1Cqnkzh4nZ04fFTzXVe/MmaKmKUOAc0hzTqc0gg8iFUpjmhERAEREAWNiMbnRSNZm4scAL2uSNV1kqieUMa55vZrSTotLnWAubNGZPALDV1YI5w4TUzmxyxFpdct8JpvY55gnettJNOYzI2CS2i5odGQ43zFwAdLI7bLRdIOnNHNPG5hkIYHB3iiDcuGoHkt3g/T6ha1sb3vjN3eE+J2gLkkXIvZcpfw/VdeSdKaha6fG6t7ssvFrdWav3GFRYuQ7Rk7TTb5TXB2kOYKy67pA6GwDnxuLgdGRhadCxzGkNV7alop+k9I6rnkEzXMeRous6xsxo3ZZgqWV/S6glppmtqor9hIA17uzJJYQAA+1zfco6Wx6+/UbVSKi8pWkr68bLhY2liI2WjMem6RXaSZs9ilNBNpxtcc7jXqUJ6G4vSx2Lp4mENcCXSNba+jlcngp3DM17Q9jg9pFw5pDmkbwRrVjZ+GrQi6lVzzytLe53z9tCOtOLyVvKxWiIukQBERAEREAREQBERAEREAREQHJOs5167lTxD3vd/Moe9qlfWIb18vBkI/wBMH5qMkKlP5menwuVGPJGG9tlaJWY5qw5m2K0JtSgleFW3FUF5WyZpKJJaM3iA/ZHcFcpmXKxqB3i2n6vwrJjl0dS2jTbV0Sq9jYOkDdepe6LHjYVrJnOcbg5brrLpjYcVrKEk8zG5ZeJn0FTNTG8Ezmb230ozzacipNRdO5G5VEGn/wAyndY/uO/NQ18qtmdFNx0IauFp1c5LPv4/nO50+n6bUTvKkdGd0kLx7wCPer7OmFAf71F63FveFyCatWrrPKD9V87cdvvXU2ZCGKqulN2yumvDXXnfy9OPtLA/pqSqw0vZ38fTl5neG9J6E/3uD1zNHeVcb0gozqqqc/8AUR/mvnvSVQk4Bdv+SR/e+hxf1HgfRDcXpjqqITymYfmrjK6I6pYzykafmvnbtd7QvC5h1sHtWj2Iv39F7j9R4FuYeOk+1d8akFH5VQP8lL8JWhcG7Bb1q7FLmdPwgRY3XWnQ3qbh4W0IVPO5iYCPCbzd3LIxxo7Bptn9IkF9trauSquGG8d2nNVxuY5ujICc7ggraVO/ToFI8oox2bsh5bdnJfQ9AwNijAAAEbLACwHgjYvnXTt4LSdC97cVvW9JZQB42YZDJs0jR7A6ypY/BzxCiovS/W3sb06ijc7oi4czpVOP18//AHEn/wBK+zphOP183rlce8rmPY9ZcSft4nakXHG9NZ/8eT1m/eFUems5FvpD/cPeBdaS2TiEsrGVWhfN2OwX2bd21erhE74y7tGl7JvKEge4vvxde/rXUegeNPq4CJTpSxODXO2uaRdjjxtcHlxXHhVUpbp1cTs+VGn2l7rlb7u68STIiKU54REQBERAEREByDrCb/xCXiyE/wCmB8lHCFKusltq53GnhPve3+VReypTXxM9Lh3/AEYckWHtWFUNWxcFjyMusE17GrIVtwWZLAViSNIWDN0zdUxtE3k34VV2yoZlG0fsj4QqCFYpu0F5k8VkZIlKvU8+9YIkRtzqCzNJoy0rGwfMrLpCruHYTU1J0YmOeduiLgc3ah6ypdh3VlI7OomDP2GeMd6zkB71CqTZWq4ujSyk/uQV1t6xqmQE2vq4rsNP1b0LfKEkh/aksP4QFg9JOgGHxUs0rIix7I3Oa/tZDmNVwXWN9XrXT2XKGGrdpO97WVvHzRxdp45Yml2cNL3d8tPzp6cntuXhCw6V/wDV1uqqLRjG/L3r2EKl7HnXGxg2VVgNZ96l3V/0VFa8yTA9hHbSAJaXvIuGXGYAGZtvbvXSB0Jw7V9EjPPSPeVSxW06VGe5ZtrWxvCi5K5wqw/or0NWKWBsz2jIB7gBw0rKQUtKx3bhzQQ2kkcL7HBpseatyrbsN991zXdzsafL+iqrDabetY+CC5F87l2vgFfxqMCFrgLHt5BfhYZLMp7vTqLHtgvHWGsgetXaNo7N2Wpzfkux4h0Sp6ijDI4Y45jCxzJGRtY7T0QRpEDME5G+++tVsVjFh1HeTzfpobwp7xxbkbrwLGN2vsRY3IItaxHBZsesO2XF1bpz3iOUbFQhPJeiBd4wjD6Z0EThDEbwxG5iYT5IvckZlZUmD0zhYwQkcYWfkuJPbMk2lDTxLMcPH/JnBntyzNrBdO6qaJzYJJ3AgTPboX2sYCNLkST7FsG9AaDT0zEXZ30HzSPj/dLsxwOSk0bAAAAAAAAALAAagBsC85Gm99zlr9zuYraKq0uyiu70WiRUiIpjlhERAEREAREQHMetOO1VE/0qbR/dkef5lEFPutun8Gnm9GSVh/G0OH/jK58CqlRWkz0ODlfDx811f2sCrTlccVjTyWWhYLM8llgSEuKrmkuV7SM8Icx7BmVg23bI2jxqHEoU/ILZYBgstXIIoxxc8+Qxu93yG1bZuyRvUmoK7eSLGHYe+Z4jjYXvdqa0Z8zuHE5Lo+A9AY2WfUntXf4TSREOZ1v9w5qQ4DgUNEzQjF3G2nK7y3njuG4agtorEKaWpwMTjp1HaOS6lEELWNDGNDGjU1oDWjkAq0RSlAKH9atd2WHvA1yPYz+Y9wUwXOeu1x+jQjYZne4Cymw6vVin3mJaM5LRMuQN5C3eJHNrdms8gtTh3lN+st5TQiWpjjOpz4mnk94afcV66DSs3wVylPidm6IYd9GpIo7WcWB79+m/wiDyuG/hC3IQoF42c3OTk9Xn6l1K2R8yy+fk+0d8akVBrqPuU3wlRyXz0n2jvjKklDrqPuU3wlesq/2Hy9imvmI5gWtvN3csjG/7Oz7zJ3BY+B6283dyyMb/ALOz7xJ3BS1eHNGF7lyk82767fkvobDvNR/ZR/CF880nm3fXb8l9DYd5qP7KP4QuTtn5Yc3/AKktDicI6yKEQYhMALBzxIPxgOd7yVraUaTXDgpB1tyB9eQP0Y2t9eiPmVpMOZYSHYB8ir+Cb7CLfcjSoviZ2zoDPp0EJOwOb7HFSBRvq7jLcPhvt0z/ABn8lJF5rFK1eaX7n9S1D5UERFAbBERAEREAREQBERARjrIo+1oJCBcxlkg/C6zv4XOXHGz5L6ErKZssb4neS9jmHk4EHvXztWU7onujdk5r3NdzaSD7wq1dZpnb2VNShKD4O/r/ANPZancsV7idaq0VlUVLpngoFmdRtRRiCCzdM+ob1XRNu6+4e85dxPsWXiLbv0BqaM+arpILWFrkm9hmfRaB69JZZrH5bv8APxGdhWGPqpWwxi7nHWdTRtceAXZ8CweOjiEUY4uefKe7a4/lsWt6F9HxSRXePHyAF59EbGDlt48gpGrdOG6jz+MxTqystF18QiIpCkEREAUE65KUvoQ8fq52E8nAjvsp2td0iw0VVNLT7XxkNvscM2H94BSUp7k1LuZhq6sfOdOdR3FbiKcslZI3WLFv1mnSA9oC1PZljixwIc0kEHWCMiCsoOy4g3Xr6WaKMsj6MpKlsrGysN2PY1zTwcLjvV0LmXQLpiyFop6h2jGSTHKfJjJNzG87G3uQdQuRuXSY52Obptc1zbX0g4Ftt9xkvKYrDyw83GWnB96/NS7CSkro+aZPPSfaO+MqRUGuo+5TfCVG3+ek+0PxFb+nqGx9vpHR0qWRgvtc4EAL09RN0Gl3exUXzGhwTW3m7uWTjf8AZ2feJO4KxgUZuBbUXH1WV/FAXxNYASRM91wLjPK3PL3qacW7Jd6NU/uV0nm3fWb8l311cynpWzPPgtgjPEnRFmjiTYLgVOAIzcjN4y25W2LbdJsfqqsMjdaOKNoDWMdZps3R0yb3cbey/NUsdhZYhwitE3foSU57t2abG611RUPlOZLiTzJvl61sHQ9nG2IZveRffnrWsodFrrnZnbeVNurzCXVdV9IePFQ2dnqLv0G+3P1cVaqOOHp7z0ivVrREavJ8zqeDUfYQRQ7WRMaedvC991mIi8c227svhERYAREQBERAEREAREQBcj60cI7KpFQ0eBOLk7BI0AOHrGifauuLVdJcGbW07oXZHymO9F41HlrB4FaVI70SzhK/Y1VJ6aPkcFhi0jZSGhpg0X3BWGYc+GR0cg0XNcQQeC3MEQLSN4VaKO1XqX00I/DTXu47SSTuUz6ucB7RxrJB4DXWiaRrIyDuTe/ktZhGDOq5ewYfFtsZpRqa30G73FdXpadsbGxsAaxrQ1rRqAGpSUqed2VMdirR7OOr+n505l1ERWDjhERAEREAREQHJ+tPoqWPNdC3wHkds0DyXn9Pk7bx5qAxPX0pJGHAtcA5pBBaRcEHIgjaFyzpd1dPYTNRgvj1mDXI36npjhr5rsYDHKKUKj5MgqU75ogbHlurMHWDmCqi2M+kzg05Kl7HNJa4FpBsWuFiDuIOpUaK9Appoq2ZU1rGm7b6QIIvqVX0klxcbG+RFsrKkMXmiNexbXizGZ66TO48H6uS9inLQQDrVDXtOrNJ5RG0OIyJsN11hyVs0Zszy21VG517FVG7SGlbLJdOwjq2jLWSTzOddrXGONoYMxe2mSSR6goMRjIUEnPjobRpuWhBOj+ATVsgjjbllpPPkMG9x+W1dvwXCY6SFsEYyGZcfKc463Hj/sFew+gip2COJgjYNjRrO8nWTxKyV5vG46eJdtIrRe5bp01DmERFRJAiIgCIiAIiIAiIgCIiAIiIDUY70ehq83XZIBYSs8q25w/SC0MPQM38ZUks9GOLQceGkXG3sU1RauKZLCvUgrJmLh2HxU8YiiYGMGwaydpJOZPErKRFsRt3zYREQwEREAREQBERAEREBhYhhNPUeehZJxewFw5O1j2rRzdX2HPPmnDg2eRo+JSlWqqRzWOcxvaODXFsYIaXEC4bc6r6lvCpUh8kmuTa+hhxT1PmxzLPfbZI5o5A2W5w+Jv/AOjIG1HMRfOx0SLjisKrwqoY94fBM28jj4UEgFieIW5wjBqiebs2RytbI3s3S9i7Qa1wIcX6VvB1bb7r6j6upJOhK74PjyKSXxEVwXW3m7uWTjR8Qwf5iTuH5Ka0/VTVxOGjNTuAJzJkac+Gie9bzBurNlnCtc2YHyWwukZouuTpaYIJ12sRZRVsfhlHeUr6ZLXL85eJtGnK+hzGl8276zfkvoqhPio/s2fCFGIurmgbkGy2v5Jmdb81J6KkZDG2KMaLGCzW3JsOZzK5W0cZSxCioXyb1XLxfcTUoON7l9ERcsmCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgF0uvUQHiIiAIiIAiIgCIiAIiIAiIgCIiA//9k=" alt="" /><br />
      <h2 className='text-1xl font-bold  my-8'>Toy Trumpet</h2><br />
      <h3>Price:$22.99</h3><br />
      <h3>Rating :3</h3><br />
      <Link to={('/single toy details')}><button className='bg-blue-500 text-white px-4 py-2 rounded mb-4'>View Details</button></Link></div>
      
      
    </TabPanel>
    <TabPanel>
    <div><img src="data:image/jpeg;base64,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" alt="" /><br />
      <h2 className='text-1xl font-bold  my-8'>Toy Drum Set</h2><br />
      <h3>Price:$8.76</h3><br />
      <h3>Rating :4.9</h3><br />
      <Link to={('/single toy details')}><button className='bg-blue-500 text-white px-4 py-2 rounded mb-4'>View Details</button></Link></div>
      <div><img src="data:image/jpeg;base64,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" alt="" /><br />
      <h2 className='text-1xl font-bold  my-8'>Kids Tambourine</h2><br />
      <h3>Price:$16</h3><br />
      <h3>Rating :5</h3><br />
      <Link to={('/single toy details')}><button className='bg-blue-500 text-white px-4 py-2 rounded mb-4'>View Details</button></Link></div>
    </TabPanel>
    
    <TabPanel>
    <div><img src="data:image/jpeg;base64,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" alt="" /><br />
      <h2 className='text-1xl font-bold  my-8'>Toy Violin</h2><br />
      <h3>Price:$43</h3><br />
      <h3>Rating :4</h3><br />
      <Link to={('/single toy details')}><button className='bg-blue-500 text-white px-4 py-2 rounded mb-4'>View Details</button></Link></div>
      <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqI8qAj4EFrQYOExImR_vaAtjl-u24Czs67A&usqp=CAU" alt="" /><br />
      <h2 className='text-1xl font-bold  my-8'>Toy Ukulele</h2><br />
      <h3>Price:$34</h3><br />
      <h3>Rating :5</h3><br />
      <Link to={('/single toy details')}><button className='bg-blue-500 text-white px-4 py-2 rounded mb-4'>View Details</button></Link></div>
    </TabPanel>
    
  </Tabs>
   </div>
  );
};

export default ShopByCategory;
