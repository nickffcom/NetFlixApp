import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useViewport } from '../customHook/useViewport'
import {useDispatch,useSelector} from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getSearchMovie } from '../store/Action';
import { movies } from '../../Const/Const';





const useQuery=()=>new URLSearchParams(useLocation().search);
export default function SearchMovie() {
  const [windowWidth]=useViewport();
  const dispatch=useDispatch();
  const {SearchMovieNEK}=useSelector(prev=>prev.infoMovies);
  const tukhoa = useQuery().get('keywords');
  useEffect(() => {
    if(tukhoa){
      dispatch(getSearchMovie(tukhoa));
    }
   
  }, [tukhoa,dispatch]);

  console.log(tukhoa);
  return (
    <SearchPanel className='SearchPanel'>

        {SearchMovieNEK&&SearchMovieNEK.length>0?(
             <div className="search-content"
             style={{gridTemplateColumns:`repeat(${windowWidth>1200?5:windowWidth>992?4:windowWidth>768?3:windowWidth>600?2:1},auto)`}}
             >
               {
                 SearchMovieNEK.map((item,index)=>{
                   if(item.backdrop_path!==null && item.media_type!=='person'){
                     let imageUrl=`https://image.tmdb.org/t/p/w500/${item.backdrop_path||item.poster_path}`;
                      return (
                        <div className='movie-item' key={index}>
                          <img src={imageUrl} alt={item.title||item.name} />
                          <span>{item.title||item.name}</span>
                        </div>
                      )
                   }
                   
                  })
               }
              
             
             </div>

        ):(
          <div className="NotFound">
             <p>Không có kết quả nào với từ khóa bạn đã nhập</p>
          </div>
           
        )}
     

    </SearchPanel>
  )
}

const SearchPanel=styled.div`
width:100%;
min-height:92vh;
padding-top:82px;
background:var(--color-bg);
transition:all 0.3s linear;

.NotFound{
  text-align:center;
  padding:5rem 8rem;
  font-size:24px;
  color:var(--color-white);
}
.search-content{
    padding:40px 60px;
    display:grid;
    gap:8px;

    &:hover .movie-item{
      opacity:0.7;
    }
    .movie-item{
      position:relative;
      max-width:400px;
      width:100%:
      height:200px;
      border-radius:12px;
      margin:20px 0;
      overflow:hidden;
      transform:scale(1);
      transition:all 0.3s linear;
      &:hover{
        transform:scale(1.2);
        z-index:10;
        opacity:1;
      }
      img{
        width:100%;
        height:100%;
        object-fit:cover;
      }
      span{
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        text-align:center;
        padding:4px;
        background:rgba(0,0,0,0.5);
        color:var(--color-white)
      }
    }
}
`;