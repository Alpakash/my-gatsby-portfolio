import styled from 'styled-components';

export const Wrapper = styled.div`
         a {
           color: #000;
           text-decoration: none;
		   margin: 50px 25px;
		   text-align: center;

           @media (max-width: 960px) {
             color: '#000';
           }
         
		&:hover {
			font-style: italic;
		}

		 }

		 
         ${({ sidebar }) =>
           sidebar &&
           `
			right: 18%;
			top: 1.4rem;
		
			@media (max-width: 960px) {
				right: 35%;
				position: fixed;
			}
		
			@media (max-width: 600px) {
				right: 66%;
			}
	`}

         ${({ desktop }) =>
           desktop
             ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
             : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
       `;
