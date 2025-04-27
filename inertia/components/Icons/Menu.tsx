import React from 'react'
import tw from 'twin.macro';

function Menu({ color = 'black', width = '30px', height = '5px', onClick }: { color?: string, width?: string, height?: string, onClick?: () => void }) {
    return (
        <div onClick={onClick} css={tw`flex flex-col gap-1 cursor-pointer`}>
            <div style={{ backgroundColor: color, width, height }} css={tw`rounded-full`}></div>
            <div style={{ backgroundColor: color, width, height }} css={tw`rounded-full`}></div>
            <div style={{ backgroundColor: color, width, height }} css={tw`rounded-full`}></div>
        </div>
    )
}

export default Menu;