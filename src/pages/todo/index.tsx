import React from "react";
import s from "./index.module.scss";
import classNames from "classnames";
import Page from "../../components/page";
import Header from "../../components/header";
import Input from "../../components/input";
import TaskCreate from "../../components/taskcreate";
import { ReactComponent as Search } from "../../assets/search.svg";

const Todo = () => {
  return (
    <Page className={s.page}>
      <div className={s.wrapper}>
        <Header />
        <TaskCreate />
        <div className={s.taskSearch}>
          <Input
            id="search"
            value=""
            onChange={() => {}}
            placeholder="search task"
            className={s.field}
            icon={<Search />}
          />
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea beatae
          impedit dicta ad unde at sequi eum exercitationem. Beatae neque
          nesciunt, sint ipsam corrupti itaque odit? Quos, vitae eos, quidem
          odit commodi ipsam maxime ratione maiores quae explicabo itaque
          adipisci accusantium exercitationem laudantium. Reiciendis doloribus a
          doloremque maxime. Pariatur quo repellendus eum delectus, esse labore
          rerum iure nihil possimus deleniti, provident laborum quas assumenda
          culpa dolor non cumque harum perferendis dolorum eius consectetur
          sunt? Nemo rem quaerat eius libero dolor! Vel tenetur, delectus
          reprehenderit unde voluptas voluptates earum in debitis id provident
          eligendi, amet rem aspernatur. Deleniti, nemo. Error amet aliquid cum
          repellat commodi dicta nam. Odio id iste ut! Provident pariatur,
          libero quas rem officia dignissimos dicta soluta neque, ab iusto
          aperiam esse ex corrupti sequi quibusdam, velit nihil nostrum
          repudiandae recusandae alias corporis quasi voluptates incidunt! Aut,
          quibusdam nemo! Praesentium, vero vitae commodi quibusdam tenetur
          consequuntur aspernatur porro quasi illum nostrum? Animi impedit quis
          laborum dolores laboriosam accusamus mollitia incidunt, fugiat quo
          quisquam modi dolor itaque accusantium deleniti inventore esse cum
          atque delectus placeat. Enim repellendus blanditiis eveniet minima
          fugit non quo, odio impedit nisi excepturi, commodi omnis placeat
          perspiciatis itaque voluptatem. Veniam, minus est. Ipsam, vel dicta.
          Sequi, nihil praesentium minus vitae magni laborum voluptatem quo
          explicabo porro unde corporis repellat nobis soluta. Minus voluptatem
          nulla unde deleniti, ipsa nesciunt eaque minima. Explicabo magni
          repellat libero optio fugit corporis quasi ullam dolorum, molestias
          nisi fuga quae provident sed ipsam! Explicabo nam, quo illo, quisquam
          sit obcaecati neque fuga perspiciatis suscipit molestias quidem
          corrupti laboriosam non deserunt voluptatem labore voluptas officia
          pariatur id quis repellendus ipsam ex? Tempora, quidem est? Sit cumque
          omnis ut doloribus illum modi quaerat neque necessitatibus fugit
          perferendis dicta soluta voluptatum praesentium quibusdam
          exercitationem eligendi corporis libero sed aut, aliquam autem
          voluptatem odit! Veniam deleniti, nostrum et quod possimus minima
          dolor eos beatae reprehenderit unde. Illo, eaque consectetur modi
          doloribus libero ex rerum hic laborum dolore quos ab ducimus?
          Necessitatibus reiciendis quod nostrum. Blanditiis magnam numquam,
          repudiandae iste modi illo et velit eum nostrum porro quidem adipisci
          ipsam accusamus dolores libero perferendis. Necessitatibus,
          perspiciatis, accusantium exercitationem eaque consequuntur odit
          voluptates dolores illo maiores maxime voluptatum aspernatur. Soluta
          praesentium, in voluptatum saepe ea sed dicta ipsum labore
          perspiciatis libero odit odio quod porro assumenda harum voluptatibus
          ratione obcaecati possimus voluptatem. Sint minus quia quos veritatis
          quidem atque, sapiente reprehenderit perferendis dolor soluta
          provident temporibus sit sunt explicabo id quisquam, praesentium
          repudiandae expedita unde accusamus iure aspernatur? Labore, quia,
          alias ipsa accusantium explicabo a quisquam earum ab debitis saepe
          ducimus similique asperiores? Officia maxime quisquam modi quam
          aliquid totam pariatur natus, dolorem reprehenderit eos odit impedit
          ratione vitae corporis iste consectetur magni excepturi perferendis
          architecto possimus odio vero ipsa! Unde, repellendus. Quia quisquam
          optio, vitae qui magnam eius neque nemo excepturi totam dolores quos
          assumenda nulla placeat accusamus. Voluptas minus sed delectus ea
          placeat quasi corrupti illo. Quibusdam esse reprehenderit recusandae
          maxime veritatis inventore iste sequi ad accusantium nobis fugit
          consequuntur voluptate distinctio, dolor enim vitae!
        </div>
      </div>
    </Page>
  );
};

export default Todo;
