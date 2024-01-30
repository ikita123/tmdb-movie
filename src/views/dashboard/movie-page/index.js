import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../../style/movieList.css';
import { getTopMovieData, getCurrentMovieData } from '../../../redux/movie';
import { getPopularPersonData } from '../../../redux/person';
import imdbPath from '../../../assets/images/imdb.svg'
import panItemPath from '../../../assets/images/PngItem_1381056.png'
import chevronLeftPath from '../../../assets/images/Chevronleft.svg'
import chevronRigthPath from '../../../assets/images/Chevronright.svg'
import tvPath from '../../../assets/images/tv.svg'
import playPath from '../../../assets/images/Play.svg'
import menuPath from '../../../assets/images/menu.svg'
import heartPath from '../../../assets/images/Heart.svg'
import fbPath from '../../../assets/images/fb.svg'
import instaPath from '../../../assets/images/insta.svg'
import twitterPath from '../../../assets/images/twitter.svg'
import youTubePath from '../../../assets/images/youTube.svg'
import SearchPath from '../../../assets/images/Search.svg'


const Movie = () => {
  const imagePath = 'https://image.tmdb.org/t/p/w500/'
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const store = useSelector(state => state.movie)
  const personStore = useSelector(state => state.person)
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);
  const [movieCurrentPage, setMovieCurrentPage] = useState(1);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = personStore.personData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(personStore.personData.length / itemsPerPage);


  const moviePerPage = 4;

  const moviestartIndex = movieCurrentPage * moviePerPage;
  const movieendIndex = moviestartIndex + moviePerPage;
  const moviecurrentItems = store.data.slice(moviestartIndex, movieendIndex);

  const movietotalPages = Math.ceil(store.data.length / moviePerPage);
  const newMovie = store.newMovieData?.[0];

  useEffect(() => {
    dispatch(
      getTopMovieData({
        q: value,
        page: currentPage,
        language: 'en-US',
        isParamChanged: true
      })
    )
  }, [dispatch])

  useEffect(() => {
    dispatch(
      getPopularPersonData({
        q: value,
        page: movieCurrentPage,
        language: 'en-US',
        isParamChanged: true
      })
    )
  }, [dispatch])


  useEffect(() => {
    dispatch(
      getCurrentMovieData({
        q: value,
        page: currentPage,
        language: 'en-US',
        isParamChanged: true
      })
    )
  }, [dispatch])

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleMoviePageChange = (newPage) => {
    setMovieCurrentPage(newPage);
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const sliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    vertical: true,
    dotsClass: 'slick-dots-vertical',
    beforeChange: (current, next) => setActiveSlide(next),
  };


  return (
    <div>
      <div style={{ height: '1000'}}>

        <Slider {...sliderSettings}>
          {store.newMovieData?.map((newMovie, index) => (
            <div key={index} style={{ width: '100%', height: '100%'}}>

              <img
                src={imagePath + (newMovie?.backdrop_path || '')}
                alt="Background Image"
                style={{
                  width: '1955px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ width: 1440, height: 500, left: 91, top: 0, position: 'absolute' }}>

                <div style={{ width: 1440, height: 80, left: 133, top: 0, position: 'absolute' }}>
                  <div style={{ width: 1440, height: 80, left: 133, top: 0, position: 'absolute' }} />
                  <div style={{ width: 525, height: 36, paddingLeft: 10, paddingRight: 10, paddingTop: 6, paddingBottom: 6, left: 493, top: 22, position: 'absolute', borderRadius: 6, border: '2px #D1D5DB solid', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
                    <div style={{ color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: 24, wordWrap: 'break-word' }}>What do you want to watch?</div>
                    <div style={{ width: 28, height: 28, position: 'relative' }}>
                    <img style={{ left: 2, top: 2, position: 'absolute', border: 'none'}} src={SearchPath} />

                      {/* <div style={{ width: 12, height: 12, left: 2, top: 2, position: 'absolute', border: '2px white solid' }}></div> */}
                    </div>
                  </div>
                  <div style={{ width: 114, height: 36, left: 1228, top: 22, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 27, display: 'inline-flex' }}>
                    <div style={{ color: 'white', fontSize: 16, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>Sign in</div>
                    <div style={{ width: 36, height: 36, position: 'relative' }}>
                      <div style={{ width: 36, height: 36, left: 0, top: 0, position: 'absolute', background: '#BE123C', borderRadius: 9999 }} />
                      <div style={{ width: 24, height: 24, left: 6, top: 6, position: 'absolute' }}>
                        <img style={{ width: 21.8, height: 23, left: 0.2, top: -0.2, position: 'absolute', background: '#BE123C' }} src={menuPath} />
                        {/* <div style={{ width: 16.80, height: 9.60, left: 3.60, top: 7.20, position: 'absolute', background: 'white' }}></div> */}
                      </div>
                    </div>
                  </div>
                  <div style={{ width: '100%', height: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 22, display: 'inline-flex' }}>
                    <img style={{ width: 50, height: 50 }} src={tvPath} />
                    <div style={{ color: 'white', fontSize: 24, fontFamily: 'DM Sans', fontWeight: '700', lineHeight: 24, wordWrap: 'break-word' }}>MovieBox</div>
                  </div>
                </div>
                <div style={{ width: 404, height: 285, left: 98, top: 158, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                  <div style={{ width: 404, color: 'white', fontSize: 48, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>{newMovie?.title}</div>
                  <div style={{ position: 'relative' }}>
                    <div style={{ width: 101, height: 17, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                      <img style={{ width: 35, height: 17 }} src={imdbPath} />
                      <div style={{ color: 'white', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: 12, wordWrap: 'break-word' }}
                      >{(newMovie.vote_average).toFixed(2) } / 10</div>
                    </div>
                    <div style={{ width: 49, height: 17, left: 135, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                      <img style={{ width: 16, height: 17 }} src={panItemPath} />
                      <div style={{ color: 'white', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: 12, wordWrap: 'break-word' }}>{(newMovie.vote_average*10).toFixed(2) }%</div>
                    </div>
                  </div>

                  <div style={{ width: 302, color: 'white', fontSize: 14, fontFamily: 'DM Sans', fontWeight: '500', wordWrap: 'break-word' }}>{newMovie?.overview}</div>
                  <div style={{ paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6, background: '#BE123C', borderRadius: 6, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}>
                    <div style={{ width: 20, height: 20, position: 'relative' }}>
                      <img style={{ width: 16, height: 16, left: 2, top: 2, position: 'absolute', background: 'res' }} src={playPath} />

                      {/* </div> */}
                    </div>
                    <div style={{ color: 'white', fontSize: 14, fontFamily: 'DM Sans', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word' }}>Watch trailer</div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </Slider>

      </div>



      {/* ))} */}
      {/*==================== Featured Movie ====================*/}
      <div style={{ width: 1395, height: 604, left: 187, top: 835, position: 'absolute' }}>
        <div style={{ width: 1244, height: 47, left: 64, top: 0, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
          <div style={{ color: 'black', fontSize: 36, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>Featured Movie</div>
          <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'flex' }}>
          </div>
        </div>
        <div style={{ width: 1240, height: 513, left: 64, top: 91, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 106, display: 'inline-flex' }}>
          {moviecurrentItems.map((movie, index) => (
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 2, display: 'inline-flex' }}>
              <div style={{ width: 250, height: 370, position: 'relative' }}>
                <div style={{ width: 250, height: 370, left: 0, top: 0, position: 'absolute' }}>
                  <div style={{ width: 250, height: 370, left: 0, top: 0, position: 'absolute', background: '#C4C4C4' }} />
                  <img style={{ width: 250, height: 370, left: 0, top: 0, position: 'absolute' }} src={imagePath + movie.poster_path} />
                </div>
                <div style={{ width: 218, height: 29.21, paddingLeft: 188, left: 16, top: 15.58, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex' }}>
                  <div style={{ width: 30, height: 29.21, position: 'relative' }}>
                    <div style={{ width: 30, height: 29.21, left: 0, top: 0, position: 'absolute', background: 'rgba(243, 244, 246, 0.50)', borderRadius: 9999, backdropFilter: 'blur(2px)' }} />
                    <img style={{ width: 25, height: 23.30, left: 2, top: 3.89, position: 'absolute' }} src={heartPath} />
                  </div>
                </div>
              </div>
              <div style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>USA, {movie.release_date}</div>
              <div style={{ width: 250, color: '#111827', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>{movie.title}</div>
              <div style={{ width: 250, height: 25, justifyContent: 'space-between', display: 'inline-flex' }}>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                  <img style={{ width: 35, height: 17 }} src={imdbPath} />
                  <div style={{ color: '#111827', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: 12, wordWrap: 'break-word' }}>{(movie.vote_average).toFixed(2) } / 10</div>
                </div>
                <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'flex' }}>
                  <img style={{ width: 16, height: 17 }} src={panItemPath} />
                  <div style={{ color: '#111827', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '400', lineHeight: 12, wordWrap: 'break-word' }}>{ (movie.vote_average * 10).toFixed(2) }%
</div>
                </div>
              </div>
              <div style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>Action, Drama, History</div>
            </div>
          ))}
        </div>
        {/* Left arrow */}

        <div style={{ width: 48, height: 48, left: 48, top: 252, position: 'absolute', transformOrigin: '0 0' }}>
          <div onClick={() => handleMoviePageChange(movieCurrentPage - 1)} disabled={movieCurrentPage === 0} style={{ width: 28, height: 14, left: -67, top: 5, position: 'absolute' }}><img src={chevronLeftPath}></img></div>
        </div>
      </div>
      {/*==================== Right arrow      ==================== */}
      <div style={{ width: 48, height: 48, left: 1354, top: 1052, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex' }}>
        <div onClick={() => handleMoviePageChange(movieCurrentPage + 1)}
          disabled={movieCurrentPage === movietotalPages - 1} style={{ width: 28, height: 14, left: 245, top: 38, position: 'absolute' }}><img src={chevronRigthPath}></img></div>
      </div>

      {/*==================== Featured Casts      ================== Fea*/}
      <div style={{ width: 1368, height: 496, left: 187, top: 1495, position: 'absolute' }}>
        <div style={{ width: 1244, height: 47, left: 64, top: 0, position: 'absolute', justifyContent: 'space-between', alignItems: 'center', display: 'inline-flex' }}>
          <div style={{ color: 'black', fontSize: 36, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>Featured Casts</div>

        </div>
        <div style={{ width: 1240, height: 405, left: 64, top: 91, position: 'absolute', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 106, display: 'inline-flex' }}>
          {currentItems.map((person, index) => (
            <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex' }}>
              <div style={{ width: 250, height: 370, position: 'relative' }}>
                <div style={{ width: 250, height: 370, left: 0, top: 0, position: 'absolute', background: '#C4C4C4' }} />
                <img style={{ width: 250, height: 370, left: 0, top: 0, position: 'absolute' }} src={imagePath + person.profile_path} />
              </div>
              <div style={{ width: 250, color: '#111827', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>{person.name}</div>
            </div>
          ))}
        </div>
        <div style={{ width: 48, height: 48, left: 1661, top: 252, position: 'absolute' }}>
          <div onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages - 1} style={{ width: 28, height: 14, left: -245, top: 10, position: 'absolute' }}><img src={chevronRigthPath}></img></div>
        </div>
        {/*==================== Left arrow         =================*/}
        <div style={{ width: 48, height: 48, left: -27, top: 252, position: 'absolute', transformOrigin: '0 0' }}>
          <div onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0} style={{ width: 28, height: 14, left: 18, top: 10, position: 'absolute' }}><img src={chevronLeftPath}></img></div>
        </div>
      </div>

      {/*==================== footer       ==============*/}
      <div style={{ left: 679, top: 2152, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 36, display: 'inline-flex' }}>
        <div style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'inline-flex' }}>
          <div style={{ width: 24, height: 27.43, position: 'relative' }}>
            <img style={{ width: 24, height: 24, left: -0, top: 1.71, position: 'absolute'}} src={fbPath} />

          </div>
          <div style={{ width: 24, height: 27.43, position: 'relative' }}>
            <img style={{  width: 24.01, height: 24.01, left: -0, top: 1.70, position: 'absolute'}} src={instaPath} />

          </div>
          <div style={{ width: 24, height: 24, position: 'relative' }}>
          <img style={{  width: 24.01, height: 24.01, left: -0, top: 1.70, position: 'absolute'}} src={twitterPath} />
          </div>
          <div style={{ width: 24, height: 21.33, position: 'relative' }}>
          <img style={{  width: 24.01, height: 24.01, left: -0, top: 1.70, position: 'absolute'}} src={youTubePath} />
          </div>
        </div>
        <div style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex' }}>
          <div style={{ color: '#111827', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>Conditions of Use</div>
          <div style={{ color: '#111827', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>Privacy & Policy</div>
          <div style={{ color: '#111827', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>Press Room</div>
        </div>
        <div style={{ color: '#6B7280', fontSize: 18, fontFamily: 'DM Sans', fontWeight: '700', wordWrap: 'break-word' }}>© 2021 MovieBox by Adriana Eka Prayudha  </div>
      </div>
    </div>
  );
};

export default Movie;
