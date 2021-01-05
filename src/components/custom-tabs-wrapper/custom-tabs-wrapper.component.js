import React, { useEffect, useState, useRef, useContext } from 'react';

import { PokemonContext } from '../../context/pokemon.context';
import withWindowResize from '../with-window-resize/with-window-resize.component';

import './custom-tabs-wrapper.styles.css';

const CustomTabsWrapper = ({ actualSize, children, ...props }) => {
    const { mode } = useContext(PokemonContext);
    const [ activeKey, setActiveKey ] = useState(null);  
    const [ width, setWidth ] = useState(0); 
    const [ left, setLeft ] = useState(0);
    const [ showArrow, setShowArrow ] = useState(false);
 
    const [ actualWidth, setActualWidth ] = useState(0); 

    const ref = useRef(null);
    // const nextRef = useRef(null);
    // const prevRef = useRef(null);
    const listTabPanel = document.getElementsByClassName('tab-panel');

    const handleScrollToRef = (index) => {
        inputRef.current[index].scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        // setScrollPositionIdx(index);
    }

    const findActualLeft = (nodes, currentActiveNode) => {
        //Finding width
        let findActivePanel = false;
        let initial = 0;
        let allWidth = 0;
        while (!findActivePanel) {
            if (nodes[initial].classList.length > 1) {
                // setScrollPositionIdx(initial);
                setActiveKey(initial);
                findActivePanel = true;                
            }
            allWidth = allWidth + nodes[initial].offsetWidth;
            initial++;
        }
        setLeft(allWidth - currentActiveNode.offsetWidth);
    }

    useEffect(() => {
        const getTabsWidth = () => {
            if (actualSize.width === actualWidth) return;
            if (actualSize.width !== actualWidth) {
                setActualWidth(actualSize.width);
                let tabsWidth = 0;
       
                for (let i = 0 ; i < listTabPanel.length; i++) {
                    tabsWidth = tabsWidth + listTabPanel[i].offsetWidth;
                }

                if (actualSize.width < tabsWidth) {
                    setShowArrow(true);
                }
                else {
                    setShowArrow(false);
                }
            }
        }
        getTabsWidth();
    
        window.addEventListener('resize', getTabsWidth);
        return () => window.removeEventListener('resize', getTabsWidth);
        
    }, [actualSize.width, actualWidth, listTabPanel]);

    useEffect(() => {
        const getClassName = () => {   
            const listTabPanel = document.getElementsByClassName('tab-panel');
            const tabsContainer = document.getElementById('regular-tabs');
            let activeNode = null;
            const activeKey = tabsContainer.dataset.activeKey;
            for (let i =0; i <listTabPanel.length; i++) {
                if (activeKey)  {
                    if (listTabPanel[i].dataset.key === activeKey) {
                        listTabPanel[i].classList.add('tab-panel-active');  
                        activeNode = listTabPanel[i];
                        setWidth(listTabPanel[i].offsetWidth);
                    }
                }
                else {
                    listTabPanel[0].classList.add('tab-panel-active');  
                    activeNode = listTabPanel[0];
                    setWidth(listTabPanel[0].offsetWidth);
                }
            }
            if (activeKey)  {
                handleScrollToRef(activeNode.dataset.key);   
            }
            else {
                handleScrollToRef(listTabPanel[0].dataset.key);
            }
            findActualLeft(listTabPanel, activeNode);
        }
        getClassName();
    }, []);


    const handleChooseActiveTab = event => {
        let target = event.target;
        let li = target.closest('li');
        let nodes = document.getElementsByClassName('tab-panel');
        let allWidth = 0;
     
        if (li) {
            for (let i = 0; i < nodes.length; i++) {
                if (nodes[i].classList.length > 1) {
                    nodes[i].classList.remove('tab-panel-active');
                }
                allWidth = nodes[i].offsetWidth + allWidth;
            }
            setWidth(li.offsetWidth);
            li.classList.add('tab-panel-active');

              //Finding width
            findActualLeft(nodes, li);
        }  
    }

    const inputRef = useRef({});
    return (
        <div className={`${showArrow? 'custom-tabs-wrapper-container-with-padding': 'custom-tabs-wrapper-container'}`}>
            <ul 
                ref={ref}
                onClick={handleChooseActiveTab} 
                id='regular-tabs' 
                name='regular-tabs' 
                className='tabs-container'
                {...props}>
                {children.length ? children.map((child) => (
                     <li 
                        data-testid={child.props['data-key']} 
                        key={child.props['data-key']} 
                        data-key={child.props['data-key']}
                        className='tab-panel'
                        ref={el => {
                            if (el) {
                                inputRef.current[child.props['data-key']] = el
                            }
                        }}
                    >
                        {child.props.title}
                    </li>
                ))
                    :
                    <li 
                        data-testid={children.props['data-key']} 
                        key={children.props['data-key']} 
                        data-key={children.props['data-key']}
                        className='tab-panel'
                        ref={el => inputRef.current[children.props['data-key']] = el}>
                        {children.props.title}
                    </li>
                }
                <li style={{width: `${width}px`, left: `${left}px`, borderBottom: `${mode === 'light'? 'none' : '2px solid white' }`}} className={` tab-active ${mode === 'light' ? 'tab-active-overlay' : ''}`}></li>
            </ul>
            {children.length ? children.map((item, index) => {
                if (Number(index) === Number(activeKey)) {
                    return (
                        <div key={index}>
                            {item.props.children}
                        </div>
                    )
                }
                else {
                    return (<div key={index}/>)
                }
            }) :
                <div>
                    {children.props.children}
                </div>
            }
        </div>
    )
};

export default withWindowResize(CustomTabsWrapper);