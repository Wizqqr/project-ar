import React,{useState} from 'react';
import { Modal, Button } from "react-bootstrap";
import Byt1 from './pictures/Byt1.jpg'
import Byt2 from './pictures/Byt2.jpg'
import Byt3 from './pictures/Byt3.jpg'
import Byt4 from './pictures/Byt4.jpg'
import '../components/Sport/Cart/Carter.css'
import '../components/Home/Home'
const Carter = () => {
  const [showModal, setShow] = useState(false);
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showModal2, setShow2] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);

  const [showModal3, setShow3] = useState(false);
 
  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow3(true);

  const [showModal4, setShow4] = useState(false);
 
  const handleClose4 = () => setShow4(false);
  const handleShow4 = () => setShow4(true);
    return (
        <div>
              <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Adidas ultraboost modal C-1</Modal.Title>
        </Modal.Header>
        <div className="Raul">
        <div className="Jakarta">
          <img src={Byt1} alt="" />
        </div>
        <div className="Jakarta2">
          <div className="JakartaText">
          <h2>ADIDAS ULTRABOOST MODAL C-1</h2>
          <p>MEN'S SHOES</p>
          <div className="Lareker">
          <h4>PRODUCT DETAILS</h4>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima veritatis voluptatibus, illo ipsam laudantium perferendis beatae recusandae qui earum voluptatem voluptate ab culpa, laborum ipsa, libero corporis nostrum expedita distinctio?</p>
         </div>
          <div className="SizerOfJakarta">
            <h3>SIZE</h3>
            <div className="Burbon">
            <button>36</button><button>38</button><button>40</button><button>42</button><button>44</button>
            </div>
            
          </div>
          <div className="Iran">
            <div className='IranBek'><h1>$199.99</h1></div>
            <div className="Iranbek"><button>BUY NOW</button></div>
          </div>
        </div>
        </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Adidas ultraboost modal C-2</Modal.Title>
        </Modal.Header>
        <div className="Raul">
        <div className="Jakarta">
          <img src={Byt2} alt="" />
        </div>
        <div className="Jakarta2">
          <div className="JakartaText">
          <h2>ADIDAS ULTRABOOST MODAL C-2</h2>
          <p>MEN'S SHOES</p>
          <div className="Lareker">
          <h4>PRODUCT DETAILS</h4>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima veritatis voluptatibus, illo ipsam laudantium perferendis beatae recusandae qui earum voluptatem voluptate ab culpa, laborum ipsa, libero corporis nostrum expedita distinctio?</p>
         </div>
          <div className="SizerOfJakarta">
            <h3>SIZE</h3>
            <div className="Burbon">
            <button>36</button><button>38</button><button>40</button><button>42</button><button>44</button>
            </div>
            
          </div>
          <div className="Iran">
            <div className='IranBek'><h1>$211.99</h1></div>
            <div className="Iranbek"><button>BUY NOW</button></div>
          </div>
        </div>
        </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose2}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div className="Raul">
        <div className="Jakarta">
          <img src={Byt3} alt="" />
        </div>
        <div className="Jakarta2">
          <div className="JakartaText">
          <h2>ADIDAS ULTRABOOST MODAL C-2</h2>
          <p>MEN'S SHOES</p>
          <div className="Lareker">
          <h4>PRODUCT DETAILS</h4>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima veritatis voluptatibus, illo ipsam laudantium perferendis beatae recusandae qui earum voluptatem voluptate ab culpa, laborum ipsa, libero corporis nostrum expedita distinctio?</p>
         </div>
          <div className="SizerOfJakarta">
            <h3>SIZE</h3>
            <div className="Burbon">
            <button>36</button><button>38</button><button>40</button><button>42</button><button>44</button>
            </div>
            
          </div>
          <div className="Iran">
            <div className='IranBek'><h1>$149.99</h1></div>
            <div className="Iranbek"><button>BUY NOW</button></div>
          </div>
        </div>
        </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose3}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showModal4} onHide={handleClose4}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <div className="Raul">
        <div className="Jakarta">
          <img src={Byt4} alt="" />
        </div>
        <div className="Jakarta2">
          <div className="JakartaText">
          <h2>ADIDAS ULTRABOOST MODAL C-2</h2>
          <p>MEN'S SHOES</p>
          <div className="Lareker">
          <h4>PRODUCT DETAILS</h4>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima veritatis voluptatibus, illo ipsam laudantium perferendis beatae recusandae qui earum voluptatem voluptate ab culpa, laborum ipsa, libero corporis nostrum expedita distinctio?</p>
         </div>
          <div className="SizerOfJakarta">
            <h3>SIZE</h3>
            <div className="Burbon">
            <button>36</button><button>38</button><button>40</button><button>42</button><button>44</button>
            </div>
            
          </div>
          <div className="Iran">
            <div className='IranBek'><h1>$99.99</h1></div>
            <div className="Iranbek"><button>BUY NOW</button></div>
          </div>
        </div>
        </div>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose4}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose4}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
          <div className="Carter">
         
          <div className="CarterCard" onClick={handleShow}>
       
            <img class="CarterCardImg" src={Byt1} alt="Card image cap"/>
            <div className="projishki">
            <p className='proji'>$160</p>
            <p className="prji">$140</p>
            </div>
              <div className="Carter-body">
              <h5 class="carter-title">Card title</h5>
      <p class="carter-text">This is a longer card with supporting text below <br></br>as a natural lead-in to additional<br></br> content. This content<br></br> is a little bit longer.</p>
      <p class="carter-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
              </div>

            <div className="CarterCard"onClick={handleShow2}>
          
            <img className="CarterCardImger" src={Byt2} alt="Card image cap"/>
            <div className="projishki">
            <p className='proji'>$160</p>
            <p className="prji">$140</p>
            </div>
              <div className="Carter-body">
              <h5 class="carter-title">Card title</h5>
      <p class="carter-text">This is a longer card with supporting text below <br></br>as a natural lead-in to additional<br></br> content. This content<br></br> is a little bit longer.</p>
      <p class="carter-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
            </div>
            <div className="CarterCard"onClick={handleShow3}>
   
            <img class="CarterCardImg" src={Byt3} alt="Card image cap"/>
            <div className="projishki">
            <p className='proji'>$160</p>
            <p className="prji">$140</p>
            </div>
              <div className="Carter-body">
              <h5 class="carter-title">Card title</h5>
      <p class="carter-text">This is a longer card with supporting text below <br></br>as a natural lead-in to additional<br></br> content. This content<br></br> is a little bit longer.</p>
      <p class="carter-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    
              </div>
            </div>
            <div className="CarterCard"onClick={handleShow4}>
      
            <img class="CarterCardImg" src={Byt4} alt="Card image cap"/>
            <div className="projishki">
            <p className='proji'>$160</p>
            <p className="prji">$140</p>
            </div>
              <div className="Carter-body">
              <h5 class="carter-title">Card title</h5>
      <p class="carter-text">This is a longer card with supporting text below <br></br>as a natural lead-in to additional<br></br> content. This content<br></br> is a little bit longer.</p>
      <p class="carter-text"><small class="text-muted">Last updated 3 mins ago</small></p>
   
     </div>
            </div>
          </div>
      </div>
    );
}

export default Carter;
