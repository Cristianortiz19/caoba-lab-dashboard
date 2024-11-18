import React from "react";

function Breadcrumb({ items }) {
    return(
        <nav>
            <ol style={{ display: 'flex', listStyle: 'none', padding: 0, margin: 0 }}>
                {
                    items.map((item, index) => (
                        <li key={index} style={{ marginRight: '3px' }}>
                            {item.link ? (
                                <a href={item.link} style={{ textDecoration: 'underline', color: '#2A318A' }}>{item.label}</a>
                            ) : (
                                <span style={{ color: '#6C757D' }}>{item.label}</span>
                            )}
                            {index < items.length - 1 && <span style={{ margin: '0 8px', color: '#6C757D' }}>/</span>}
                        </li>
                    ))
                }
            </ol>
        </nav>
    )
}

export default Breadcrumb