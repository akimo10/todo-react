# todo-react

Created with CodeSandbox

### React のループ時、下記エラーが発生する。

```
  {incompleteTodos.map((todo) => {
    return (
      <div className="list-row">
        <li>{todo}</li>
        <button>完了</button>
        <button>削除</button>
      </div>
    );
  })}
```

> Warning: Each child in a list should have a unique "key" prop.
>
> Check the render method of `App`. See https://reactjs.org/link/>warning-keys for more information.
> at div
> at App (https://swzosg.csb.app/src/App.jsx:26:41)

これは、仮装 DOM の再レンダリングの際に、変更差分しか処理しないようにするため、
このループの情報を明示的にする必要があるもの(エラーではないっぽいが)。

```
  {incompleteTodos.map((todo) => {
    return (
      <div key={todo} className="list-row">
        <li>{todo}</li>
        <button>完了</button>
        <button>削除</button>
      </div>
    );
  })}
```

ループ時に作成したタグに key を付与する。

### レンダリング時に関数が即実行されてしまう。

```
<button onClick={onClickDelete(index)}>削除</button>
```

引数が必要な関数にて(引数)付与してしまうと、
上記記述だと、レンダリング時に毎回実行されてしまう。
その為、アロー関数を挟みこむことで即処理を防止できる。

```
<button onClick={() => onClickDelete(index)}>削除</button>
```
