import React from 'react';
import s from './Card.module.scss'

export const Card = ({flower}) => {
    return(
         <div className={s.wrapper}>
            <div className={s.imgWrap}>
                <img src={flower.ImgSrc} alt="" />
            </div>
            <div className={s.content}>
                <span>
                    {<h1 className={s.name}> {flower.name}</h1>}
                    {<p>Ареалы произрастания: {flower.region}</p>}
                    {<p >Тип почвы: {flower.soil}</p>}
                    {<p >Культура входит в гос. фармакопею: {flower.FA}</p>}
                    {<p >Занесена ли культура в Красную книгу: {flower.KK}</p>}
                    {<p >Период посева : {flower.month}</p>}
                    {<p >Содержание БАВ, химический состав : {flower.structure}</p>}
                    {<p >В каких медицинских препаратах содержится : {flower.medical} </p>}
                </span>
            </div>
         </div>
    )
}