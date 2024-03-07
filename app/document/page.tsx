import "./style.scss";
import Image from "next/image";

const Doc = () => {
  return (
    <article>
      <link
        rel="stylesheet"
        href="https://fastly.jsdelivr.net/npm/water.css@2/out/water.css"
      ></link>
      <h1>操作指南</h1>
      <hr />
      <blockquote>
        本文是抄自{" "}
        <a
          href="https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web/blob/main/docs/user-manual-cn.md"
          target="_blank"
        >
          ChatGPT Next Web 用户手册
        </a>{" "}
        和{" "}
        <a href="https://docs.midjourney.com/" target="_blank">
          Midjourney Documentation
        </a>
      </blockquote>
      <h2>什么是面具？它和提示词的区别是什么？</h2>
      <p>
        面具 = 多个预设提示词 + 模型设置 + 对话设置。 其中预设提示词（Contextual
        Prompts）一般用于 In-Context Learning，用于让 ChatGPT
        生成更加符合要求的输出，也可以增加系统约束或者输入有限的额外知识。
        模型设置则顾名思义，使用此面具创建的对话都会默认使用对应的模型参数。
        对话设置是与对话体验相关的一系列设置，我们会在下方的章节中依次介绍。
      </p>
      <h2>对话框上方的按钮的作用</h2>
      <p>
        在默认状态下，将鼠标移动到按钮上，即可查看按钮的文字说明，我们依次介绍：
      </p>
      <ul>
        <li>
          对话设置：当前对话的设置，它与全局设置的关系，请查看下一小节的说明；
        </li>
        <li>颜色主题：点击即可在自动、暗黑、浅色之间轮换；</li>
        <li>
          快捷指令：项目内置的快捷填充预设提示词，也可以在对话框中输入 /
          进行搜索；
        </li>
        <li>所有面具：进入面具页面；</li>
        <li>
          清除聊天：插入一个清除标记，标记上方的聊天将不会发给
          GPT，效果相当于清除了当前对话，当然，你也可以再次点击该按钮，可取消清除；
        </li>
        <li>
          模型设置：更改当前对话的模型，注意，此按钮只会修改当前对话的模型，并不会修改全局默认模型。
        </li>
      </ul>
      <h2>什么是历史摘要？</h2>
      <p>
        历史摘要功能，也是历史消息压缩功能，是保证长对话场景下保持历史记忆的关键，
        合理使用该功能可以在不丢失历史话题信息的情况下，节省所使用的token。
      </p>
      <p>
        由于 ChatGPT API 的长度限制，我们以 3.5 模型为例，它只能接受小于 4096
        tokens 的对话消息，一旦超出这个数值，就会报错。 同时为了让 ChatGPT
        理解我们对话的上下文，往往会携带多条历史消息来提供上下文信息，而当对话进行一段时间之后，很容易就会触发长度限制。
      </p>
      <p>
        为了解决此问题，我们增加了历史记录压缩功能，假设阈值为 1000
        字符，那么每次用户产生的聊天记录超过 1000
        字符时，都会将没有被总结过的消息，发送给 ChatGPT，让其产生一个 100
        字所有的摘要。
      </p>
      <p>
        这样，历史信息就从 1000 字压缩到了 100
        字，这是一种有损压缩，但已能满足大多数使用场景。
      </p>
      <h2>什么时候应该关闭历史摘要？</h2>
      <p>
        历史摘要可能会影响 ChatGPT
        的对话质量，所以如果对话场景是翻译、信息提取等一次性对话场景，请直接关闭历史摘要功能，并将历史消息数设置为
        0。
      </p>
      <h2>当用户发送一条消息时，有哪些信息被发送出去了？</h2>
      <p>
        当用户在对话框输入了一条消息后，发送给 ChatGPT
        的消息，包含以下几个部分：
      </p>
      <ol>
        <li>
          系统级提示词：用于尽可能贴近 ChatGPT 官方 WebUI
          的使用体验，可在设置中关闭此信息；
        </li>
        <li>历史摘要：作为长期记忆，提供长久但模糊的上下文信息；</li>
        <li>
          预设提示词：当前对话内设置的预设提示词，用于 In-Context Learning
          或者注入系统级限制；
        </li>
        <li>最近 n 条对话记录：作为短期记忆，提供短暂但精确的上下文信息；</li>
        <li>用户当前输入的消息。</li>
      </ol>
      <hr />
      <h2>怎么用MJ</h2>
      <code>/mj &lt;pormpt&gt; &lt;参数&gt;</code>

      <h2>纵横比（Aspect Ratios）</h2>
      <p>
        <code>--aspect</code> 或 <code>--ar</code> 改变生成物的纵横比。
      </p>

      <h2>混沌（Chaos）</h2>
      <p>
        <code>--chaos &lt;数字 0–100&gt;</code>{" "}
        改变结果的多样性程度。较高的值会产生更不寻常和意外的生成物。
      </p>

      <h2>图像权重（Image Weight）</h2>
      <p>
        <code>--iw &lt;0–2&gt;</code> 设置图像提示相对于文本权重的权重。默认值为
        1。
      </p>

      <h2>否定（No）</h2>
      <p>
        <code>--no</code> 否定提示，--no 表示尝试从图像中删除植物。
      </p>

      <h2>质量（Quality）</h2>
      <p>
        <code>--quality &lt;.25, .5, 或 1&gt;</code> 或{" "}
        <code>--q &lt;.25, .5, 或 1&gt;</code>{" "}
        指定你想要花费的渲染质量时间。默认值为 1。较高的值使用更多 GPU
        分钟；较低的值使用较少。
      </p>

      <h2>随机（Random）</h2>
      <p>
        <code>--style random</code>，将一个随机的32位基本样式 Style Tuner
        代码添加到你的提示中。你也可以使用 <code>--style random-16</code>、
        <code>--style random-64</code> 或 <code>--style random-128</code>{" "}
        来使用其他长度的随机 Style Tuner 结果。
      </p>

      <h2>风格（Style）</h2>
      <ul>
        <li>
          <code>--style &lt;raw&gt;</code>{" "}
          在Midjourney模型版本5.1和5.2之间切换。
        </li>
        <li>
          <code>--style &lt;4a, 4b, 或 4c&gt;</code>{" "}
          在Midjourney模型版本4之间切换。
        </li>
        <li>
          <code>--style &lt;cute, expressive, original, 或 scenic&gt;</code>{" "}
          在Niji模型版本5之间切换。
        </li>
      </ul>

      <h2>平铺（Tile）</h2>
      <p>
        <code>--tile</code> 参数生成可用作重复平铺以创建无缝图案的图像。
      </p>

      <h2>模型选择</h2>
      <ul>
        <li>
          <code>--v 5.2</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V52_Poppies.jpg"
            alt=""
          />
        </li>
        <li>
          <code>--v 5.2 --style raw</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V52_Poppies_RAW.jpg"
            alt=""
          />
        </li>
        <li>
          <code>--v 5.1</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V51_VibrantPoppies.jpg"
            alt=""
          />
        </li>
        <li>
          <code>--v 5</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_V5_VibrantCaliforniaPoppies.png"
            alt=""
          />
        </li>
        <li>
          <code>--niji 5</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Niji5.jpg"
            alt=""
          />
        </li>
        <li>
          <code>--niji 5 --style original</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Niji5_Original.jpg"
            alt=""
          />
        </li>
        <li>
          <code>--niji 5 --style cute</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Niji5_cute.jpg"
            alt=""
          />
        </li>
        <li>
          <code>--niji 5 --style expressive</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Niji5_expressive.jpg"
            alt=""
          />
        </li>
        <li>
          <code>--niji 5 --style scenic</code>
          <Image width={400} height={400}
            src="https://cdn.document360.io/3040c2b6-fead-4744-a3a9-d56d621c6c7e/Images/Documentation/MJ_Niji5_scenic.jpg"
            alt=""
          />
        </li>
      </ul>
    </article>
  );
};

export default Doc;
