import React from 'react';
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
import NewsCard from '../../components/NewsCard';
import PaginationComponent from '../../components/PaginationComponent';

function NewsList() {
  const fake = [
    {
      createdAt: '2022-02-10T23:55:47.534Z',
      title: 'Principal Web Analyst',
      text: 'Nostrum minima et ab eos sit architecto commodi est. Nobis corporis corporis doloribus reprehenderit dolore. Dolorum expedita voluptatem. Quo ea vero a tempora repellendus iusto.\n \rEa itaque aut velit veniam ipsa et nihil. Est rerum adipisci corporis rerum est nostrum at. Corporis consectetur quis. Qui maiores dignissimos.\n \rUt sit in. Inventore aut nihil. Minima et et eaque dolorum.',
      id: '1',
    },
    {
      createdAt: '2022-02-11T00:11:28.220Z',
      title: 'Legacy Optimization Specialist',
      text: 'Veniam sit modi iste magnam rerum ex. Repudiandae cupiditate excepturi ipsam eligendi recusandae dolorem vel numquam eius. Nostrum quod et a tempora nobis. Ad et molestias soluta pariatur repellat reprehenderit. Optio ea occaecati suscipit autem sapiente ut at ut qui.\n \rAut tempore nesciunt illum sed sint totam alias quia beatae. Perspiciatis repudiandae odio ut qui magni non est et quo. In culpa laudantium non aliquam assumenda eum reprehenderit perferendis. Pariatur inventore explicabo distinctio optio est ad commodi ullam repudiandae. Ut maiores dolores a dolorum incidunt occaecati. Eum soluta ex distinctio quia inventore aperiam.\n \rCulpa dolorem qui. Expedita ut optio earum. Dolore est quo in deleniti voluptas. Iste ut sequi sapiente quia non omnis. Fuga eos et magni sunt ratione quae et et. Id nesciunt tenetur recusandae enim tempora recusandae suscipit.',
      id: '2',
    },
  ];

  const fakeTitle = fake.map((item) => <li>{item.title}</li>);

  // console.log(`fakeTitle: ${fakeTitle}`);

  return (
    <div>
      <ButtonComponent text="Добавить статью" />
      <br />
      <NewsCard />
      <PaginationComponent />
    </div>
  );
}

export default NewsList;
